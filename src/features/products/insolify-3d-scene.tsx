"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef } from "react";
import "./insolify-3d-scene.css";

type FloatCard = {
  size: "big" | "sm";
  x: number;
  y: number;
  z: number;
  ry: number;
  delay: string;
  body: ReactNode;
};

const cards: FloatCard[] = [
  {
    size: "big",
    x: -360,
    y: -170,
    z: 90,
    ry: 20,
    delay: "0s",
    body: (
      <>
        <div className="t">
          <div className="ic" style={{ "--c": "linear-gradient(135deg,#f5cf6b,#b8860b)" } as CSSProperties} />
          <div>
            <b>Fincore</b>
            <span>Core banking</span>
          </div>
        </div>
        <div className="chips">
          <i>Accounts</i>
          <i>Loans</i>
          <i>Payments</i>
          <i>Compliance</i>
          <i>+8 modules</i>
        </div>
      </>
    ),
  },
  {
    size: "big",
    x: 350,
    y: -130,
    z: 110,
    ry: -20,
    delay: "1.4s",
    body: (
      <>
        <div className="t">
          <div className="ic" style={{ "--c": "linear-gradient(135deg,#ffe3a0,#d4881f)" } as CSSProperties} />
          <div>
            <b>Safi AI</b>
            <span>AI assistant</span>
          </div>
        </div>
        <div className="msg">Unusual transfer flagged and held for review.</div>
        <div className="msg me">Approve after verification</div>
      </>
    ),
  },
  {
    size: "big",
    x: -380,
    y: 75,
    z: 130,
    ry: 18,
    delay: "2.8s",
    body: (
      <>
        <div className="t">
          <div className="ic" style={{ "--c": "linear-gradient(135deg,#ecd596,#a67c1a)" } as CSSProperties} />
          <div>
            <b>Settle Africa</b>
            <span>Money transfers</span>
          </div>
        </div>
        <div className="route">
          <span>Lagos</span>
          <span>Nairobi</span>
        </div>
        <div className="bar">
          <i />
        </div>
        <div className="mini">
          <em>₦250,000</em> settled in 42s
        </div>
      </>
    ),
  },
  {
    size: "sm",
    x: -250,
    y: 240,
    z: 50,
    ry: 14,
    delay: "4.2s",
    body: (
      <div className="mini">
        <em>Track payment</em>
        <br />
        STL-20931 · Delivered
      </div>
    ),
  },
  {
    size: "sm",
    x: 395,
    y: 100,
    z: 70,
    ry: -16,
    delay: "5.4s",
    body: (
      <div className="mini">
        <em>Multi-language</em>
        <br />
        50+ languages, live
      </div>
    ),
  },
  {
    size: "sm",
    x: 300,
    y: 245,
    z: 110,
    ry: -14,
    delay: "6.6s",
    body: (
      <div className="mini">
        <em>Fraud detection</em>
        <br />
        Real-time monitoring
      </div>
    ),
  },
  {
    size: "sm",
    x: -215,
    y: -275,
    z: 30,
    ry: 12,
    delay: "7.8s",
    body: (
      <div className="mini">
        <em>Voice matching</em>
        <br />
        Biometric verification
      </div>
    ),
  },
];

export function Insolify3dScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const stage = stageRef.current;
    const world = worldRef.current;
    if (!scene || !stage || !world) return;

    const fit = () => {
      const scale = Math.min(scene.clientWidth / 1000, scene.clientHeight / 680);
      stage.style.transform = `scale(${Math.max(scale, 0.35)})`;
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(scene);

    const onMove = (event: PointerEvent) => {
      const box = scene.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - 0.5;
      const y = (event.clientY - box.top) / box.height - 0.5;
      world.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 8}deg)`;
    };
    const onLeave = () => {
      world.style.transform = "";
    };

    scene.addEventListener("pointermove", onMove);
    scene.addEventListener("pointerleave", onLeave);
    return () => {
      observer.disconnect();
      scene.removeEventListener("pointermove", onMove);
      scene.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={sceneRef} className="insolify-3d" aria-hidden>
      <div className="window" />
      <div ref={stageRef} className="stage">
        <div ref={worldRef} className="world">
          <div className="phone">
            <div className="screen">
              <div className="hd">
                <span className="wm">
                  Ins
                  <svg viewBox="0 0 16 22">
                    <path
                      d="M8 2.5A6 6 0 1 0 14 8.5"
                      fill="none"
                      stroke="#d4a017"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path d="M8 7c2.4 2.6 3.4 4.1 3.4 5.6a3.4 3.4 0 0 1-6.8 0C4.6 11.1 5.6 9.6 8 7Z" fill="#f5cf6b" />
                  </svg>
                  lify
                </span>
                <small>Good morning</small>
              </div>
              <div className="bal">
                Total balance<b>₦4,820,500</b>
              </div>
              <div className="apps">
                <div style={{ "--c": "linear-gradient(135deg,#f5cf6b,#b8860b)" } as CSSProperties}>Fincore</div>
                <div style={{ "--c": "linear-gradient(135deg,#ffe3a0,#d4881f)" } as CSSProperties}>Safi AI</div>
                <div style={{ "--c": "linear-gradient(135deg,#ecd596,#a67c1a)" } as CSSProperties}>Settle</div>
              </div>
              <div className="li">
                <div>
                  Transfer to Nairobi
                  <span>Settle Africa</span>
                </div>
                <div>−₦250k</div>
              </div>
              <div className="li">
                <div>
                  Loan repayment
                  <span>Fincore</span>
                </div>
                <div className="pos">+₦86k</div>
              </div>
              <div className="li">
                <div>
                  Anomaly blocked
                  <span>Safi AI</span>
                </div>
                <div className="pos">Safe</div>
              </div>
            </div>
          </div>
          {cards.map((card) => (
            <div
              key={`${card.size}-${card.delay}`}
              className={`float-card ${card.size}`}
              style={
                {
                  "--x": `${card.x}px`,
                  "--y": `${card.y}px`,
                  "--z": `${card.z}px`,
                  "--ry": `${card.ry}deg`,
                  "--d": card.delay,
                } as CSSProperties
              }
            >
              <div className="in">{card.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
