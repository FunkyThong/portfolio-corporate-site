export default function App() {
  return (
    <div>
      <header style={{ display: "flex", justifyContent: "space-between", padding: "16px 24px", borderBottom: "1px solid #ddd" }}>
        <div style={{ fontWeight: 700 }}>Flowly</div>
        <nav style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <a href="#service">Service</a>
          <a href="#works">Works</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a
            href="#contact"
            style={{
              padding: "8px 12px",
              border: "1px solid #111",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            お問い合わせ
          </a>
        </nav>
      </header>

      <main>
        <section style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div>
            <h1 style={{ fontSize: 40, lineHeight: 1.2, margin: 0 }}>業務を、迷わず回せる状態へ。</h1>
            <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.8 }}>
              Flowlyは、散らばった業務情報を一元化し、現場の「探す・待つ・迷う」を減らす業務効率化SaaSです。
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              <a
                href="#contact"
                style={{
                  padding: "10px 18px",
                  borderRadius: 10,
                  backgroundColor: "#111",
                  color: "#fff",
                  textDecoration: "none"
                }}
              >
                お問い合わせ
              </a>
            
              <a
                href="#contact"
                style={{
                  padding: "10px 18px",
                  borderRadius: 10,
                  border: "1px solid #111",
                  textDecoration: "none"
                }}
              >
                資料請求
              </a>
            </div>
          </div>

          <div style={{ border: "1px solid #ddd", borderRadius: 16, minHeight: 220, display: "grid", placeItems: "center" }}>
            <div style={{ opacity: 0.7 }}>Visual (placeholder)</div>
          </div>
        </section>

        <section style={{ padding: "0 24px 56px", maxWidth: 980, margin: "0 auto" }}>
          <h2 style={{ margin: "0 0 16px" }}>こんな課題、ありませんか？</h2>
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
              <div style={{ fontWeight: 700 }}>手作業が多い</div>
              <p style={{ margin: "8px 0 0", lineHeight: 1.7 }}>Excel管理が増えて、ミスや手戻りが起きやすい。</p>
            </div>
            <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
              <div style={{ fontWeight: 700 }}>情報が散らばる</div>
              <p style={{ margin: "8px 0 0", lineHeight: 1.7 }}>必要な情報がどこにあるかわからず探す時間が増える。</p>
            </div>
            <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
              <div style={{ fontWeight: 700 }}>引き継ぎが大変</div>
              <p style={{ margin: "8px 0 0", lineHeight: 1.7 }}>属人化して、担当が変わると業務が止まりがち。</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
