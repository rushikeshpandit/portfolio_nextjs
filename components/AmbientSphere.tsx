"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Low-poly "earth" sphere: a faceted icosahedron with a wireframe overlay,
 * lit by two accent lights. It stays pinned to the viewport centre through the
 * hero, then — once the About section approaches — drifts up at half scroll
 * speed so it recedes into the background behind the content.
 */
export default function AmbientSphere() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const keyLight = new THREE.DirectionalLight(0x4de1ff, 2.2);
    keyLight.position.set(4, 2, 3);
    scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(0xff7399, 2.6);
    rimLight.position.set(-4, 1, -3);
    scene.add(rimLight);
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.35);
    fillLight.position.set(0, -3, 4);
    scene.add(fillLight);

    const spinGroup = new THREE.Group();
    scene.add(spinGroup);

    const geometry = new THREE.IcosahedronGeometry(1.4, 1);
    const pos = geometry.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const n = Math.sin(v.x * 3.1) * Math.cos(v.y * 2.7) * Math.sin(v.z * 3.7);
      v.multiplyScalar(1 + n * 0.12);
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    geometry.computeVertexNormals();

    const facetMat = new THREE.MeshStandardMaterial({
      color: 0x2c3070,
      flatShading: true,
      metalness: 0.25,
      roughness: 0.5,
      emissive: 0x141838,
    });
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x4de1ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const mesh = new THREE.Mesh(geometry, facetMat);
    mesh.add(new THREE.Mesh(geometry, wireMat));
    spinGroup.add(mesh);
    spinGroup.scale.setScalar(0.65);

    // Pinned through the hero, then released to drift at half scroll speed.
    let releaseY = Infinity;
    const computeRelease = () => {
      const about = document.getElementById("about");
      if (about) releaseY = Math.max(0, about.offsetTop - window.innerHeight);
    };
    const updateParallax = () => {
      const y = window.scrollY;
      const offset = y <= releaseY ? y : releaseY + (y - releaseY) * 0.5;
      container.style.setProperty("--parallax", `${offset}px`);
      // Recede into the background once released.
      const past = Math.max(0, y - releaseY);
      container.style.setProperty("--fade", String(Math.max(0.35, 1 - past / 1400)));
    };

    let targetTilt = 0;
    const onMouse = (e: MouseEvent) => {
      targetTilt = (e.clientY / window.innerHeight - 0.5) * 0.35;
    };

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      computeRelease();
      updateParallax();
    };

    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("resize", resize);
    window.addEventListener("load", resize);
    resize();
    // Layout can shift after hydration/fonts; recompute once things settle.
    const settle = window.setTimeout(resize, 800);
    requestAnimationFrame(() => container.classList.add("loaded"));

    let inView = true;
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
    });
    observer.observe(container);

    const clock = new THREE.Clock();
    renderer.setAnimationLoop(() => {
      if (!inView) return;
      const t = clock.getElapsedTime();
      if (!reduceMotion) {
        spinGroup.rotation.y = t * 0.45;
        spinGroup.rotation.x += (targetTilt - spinGroup.rotation.x) * 0.05;
        spinGroup.position.y = Math.sin(t * 0.8) * 0.08;
      }
      renderer.render(scene, camera);
    });

    return () => {
      window.clearTimeout(settle);
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", resize);
      window.removeEventListener("load", resize);
      observer.disconnect();
      renderer.setAnimationLoop(null);
      geometry.dispose();
      facetMat.dispose();
      wireMat.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef} className="ambient-sphere" aria-hidden="true" />;
}
