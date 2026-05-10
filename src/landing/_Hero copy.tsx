"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function _Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const W = wrap.offsetWidth;
    const H = 560;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xfce4f5, 1);
    renderer.shadowMap.enabled = true;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xfce4f5, 18, 40);

    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
    camera.position.set(0, 3, 12);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.AmbientLight(0xfff0fb, 1.1));
    const sun = new THREE.DirectionalLight(0xffd6f0, 1.8);
    sun.position.set(8, 12, 6);
    sun.castShadow = true;
    scene.add(sun);
    const fill = new THREE.DirectionalLight(0xc4b5fd, 0.7);
    fill.position.set(-6, 4, 4);
    scene.add(fill);

    // Ground
    const groundGeo = new THREE.PlaneGeometry(40, 40, 30, 30);
    const gPos = groundGeo.attributes.position;
    for (let i = 0; i < gPos.count; i++) {
      const x = gPos.getX(i),
        z = gPos.getZ(i);
      if (Math.abs(x) > 2 || z < -2) gPos.setY(i, (Math.random() - 0.5) * 0.4);
    }
    groundGeo.computeVertexNormals();
    const ground = new THREE.Mesh(
      groundGeo,
      new THREE.MeshLambertMaterial({ color: 0xc8f5d8, flatShading: true }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.8;
    ground.receiveShadow = true;
    scene.add(ground);

    // Mountains
    const makeMountain = (x: number, z: number, scale: number, col: number) => {
      const geo = new THREE.ConeGeometry(
        scale,
        scale * 1.4,
        5 + Math.floor(Math.random() * 3),
        1,
      );
      const pos = geo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        pos.setX(i, pos.getX(i) + (Math.random() - 0.5) * 0.3);
        pos.setZ(i, pos.getZ(i) + (Math.random() - 0.5) * 0.3);
      }
      geo.computeVertexNormals();
      const mesh = new THREE.Mesh(
        geo,
        new THREE.MeshLambertMaterial({ color: col, flatShading: true }),
      );
      mesh.position.set(x, -1.8 + scale * 0.7, z);
      mesh.castShadow = true;
      scene.add(mesh);
      if (scale > 1.5) {
        const snow = new THREE.Mesh(
          new THREE.ConeGeometry(scale * 0.35, scale * 0.5, 5, 1),
          new THREE.MeshLambertMaterial({ color: 0xfff0fb, flatShading: true }),
        );
        snow.position.set(x, -1.8 + scale * 1.4 - scale * 0.15, z);
        scene.add(snow);
      }
    };

    const mtColors = [
      0xb8a9f5, 0xd4b0f0, 0xa5c8f5, 0xc9a8e8, 0x9bb8f0, 0xbba5f5,
    ];
    makeMountain(-7, -4, 3.2, mtColors[0]);
    makeMountain(-4, -6, 2.4, mtColors[1]);
    makeMountain(-10, -6, 2.0, mtColors[2]);
    makeMountain(7, -4, 3.5, mtColors[3]);
    makeMountain(4, -7, 2.8, mtColors[4]);
    makeMountain(10, -5, 2.2, mtColors[5]);
    makeMountain(-1, -8, 4.0, 0xc4adf5);
    makeMountain(1, -9, 1.8, 0xd8b8f0);
    makeMountain(-14, -5, 1.6, mtColors[2]);
    makeMountain(14, -6, 1.4, mtColors[0]);

    // Trees
    const makeTree = (x: number, z: number, scale: number) => {
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08 * scale, 0.12 * scale, 0.6 * scale, 5),
        new THREE.MeshLambertMaterial({ color: 0xd4a0b0, flatShading: true }),
      );
      trunk.position.set(x, -1.8 + 0.3 * scale, z);
      scene.add(trunk);
      const cols = [0xa8e8c0, 0xb8f0c8, 0x90d8b0];
      [0.7, 0.5, 0.35].forEach((r, i) => {
        const cone = new THREE.Mesh(
          new THREE.ConeGeometry(r * scale, 0.7 * scale, 6, 1),
          new THREE.MeshLambertMaterial({
            color: cols[i % cols.length],
            flatShading: true,
          }),
        );
        cone.position.set(x, -1.8 + (0.6 + i * 0.45) * scale, z);
        cone.castShadow = true;
        scene.add(cone);
      });
    };

    makeTree(-3, 0, 1.0);
    makeTree(-5, 1, 0.8);
    makeTree(-2, 2, 0.9);
    makeTree(3, 0.5, 1.1);
    makeTree(5, -0.5, 0.75);
    makeTree(4, 2, 0.85);
    makeTree(-8, 0, 0.7);
    makeTree(8, 1, 0.7);
    makeTree(-1, 3, 0.6);

    // Clouds
    const makeCloud = (x: number, y: number, z: number, scale: number) => {
      const mat = new THREE.MeshLambertMaterial({
        color: 0xfff4fe,
        flatShading: true,
        transparent: true,
        opacity: 0.9,
      });
      [
        [0, 0, 0, 1],
        [0.7, 0.2, 0, 0.75],
        [-0.6, 0.15, 0, 0.7],
        [0.3, -0.1, 0.3, 0.6],
      ].forEach(([dx, dy, dz, s]) => {
        const mesh = new THREE.Mesh(
          new THREE.SphereGeometry(s * scale, 5, 4),
          mat,
        );
        mesh.position.set(x + dx * scale, y + dy * scale, z + dz * scale);
        scene.add(mesh);
      });
    };
    makeCloud(-5, 5, -8, 0.9);
    makeCloud(4, 6, -10, 1.1);
    makeCloud(-1, 7, -12, 0.8);
    makeCloud(8, 5, -9, 0.7);

    // Stars/particles
    const starPos = new Float32Array(60 * 3);
    for (let i = 0; i < 60; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 50;
      starPos[i * 3 + 1] = Math.random() * 10 + 4;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;
    }
    const sGeo = new THREE.BufferGeometry();
    sGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    scene.add(
      new THREE.Points(
        sGeo,
        new THREE.PointsMaterial({
          color: 0xf0d0ff,
          size: 0.12,
          transparent: true,
          opacity: 0.7,
        }),
      ),
    );

    // Birds
    const birds: { mesh: THREE.Mesh; speed: number; offset: number }[] = [];
    for (let i = 0; i < 5; i++) {
      const b = new THREE.Mesh(
        new THREE.SphereGeometry(0.06, 4, 3),
        new THREE.MeshLambertMaterial({ color: 0xd8a0e8, flatShading: true }),
      );
      b.position.set(
        (Math.random() - 0.5) * 12,
        3 + Math.random() * 3,
        (Math.random() - 0.5) * 5 - 3,
      );
      scene.add(b);
      birds.push({
        mesh: b,
        speed: 0.005 + Math.random() * 0.008,
        offset: Math.random() * Math.PI * 2,
      });
    }

    // Mouse
    let mouseX = 0,
      mouseY = 0,
      targetX = 0,
      targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / W - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / H - 0.5) * 2;
    };
    wrap.addEventListener("mousemove", onMouseMove);

    let t = 0;
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.008;
      targetX += (mouseX * 0.5 - targetX) * 0.04;
      targetY += (mouseY * 0.3 - targetY) * 0.04;
      camera.position.x = targetX * 1.5;
      camera.position.y = 3 + targetY * 0.8;
      camera.lookAt(0, 0, 0);
      birds.forEach((b) => {
        b.mesh.position.x += b.speed;
        b.mesh.position.y = 3.5 + Math.sin(t * 2 + b.offset) * 0.15;
        if (b.mesh.position.x > 10) b.mesh.position.x = -10;
      });
      sun.position.x = 8 + Math.sin(t * 0.1) * 2;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      wrap.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        borderRadius: "12px",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />

      {/* Overlay text */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "560px",
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 52px",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            letterSpacing: "0.13em",
            color: "#7c3aed",
            border: "0.5px solid #c4b5fd",
            padding: "5px 14px",
            borderRadius: "100px",
            marginBottom: "1.2rem",
            display: "inline-block",
            width: "fit-content",
            background: "rgba(255,255,255,0.55)",
            fontFamily: "monospace",
          }}
        >
          Frontend Developer · 5 yrs
        </span>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "2.9rem",
            fontWeight: 300,
            lineHeight: 1.2,
            color: "#1e1b4b",
            marginBottom: "0.9rem",
          }}
        >
          Building the{" "}
          <em style={{ fontStyle: "italic", color: "#7c3aed" }}>web,</em>
          <br />
          one pixel at a time.
        </h1>
        <p
          style={{
            fontSize: "13px",
            color: "#4c1d95",
            lineHeight: 1.8,
            maxWidth: "300px",
            marginBottom: "1.8rem",
            opacity: 0.75,
          }}
        >
          React · Next.js · TypeScript · Micro-Frontend
        </p>
        <div style={{ display: "flex", gap: "12px", pointerEvents: "auto" }}>
          <a
            href="#contact"
            style={{
              fontSize: "12px",
              padding: "9px 22px",
              borderRadius: "100px",
              background: "#7c3aed",
              color: "#fff",
              textDecoration: "none",
              letterSpacing: "0.05em",
              fontWeight: 500,
            }}
          >
            get in touch
          </a>
          <a
            href="#projects"
            style={{
              fontSize: "12px",
              padding: "9px 22px",
              borderRadius: "100px",
              border: "0.5px solid #7c3aed",
              color: "#7c3aed",
              textDecoration: "none",
              letterSpacing: "0.05em",
              background: "rgba(255,255,255,0.5)",
            }}
          >
            view projects
          </a>
        </div>
      </div>
    </div>
  );
}
