import "./styles/Main.css"

const states = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
]
function Main() {
  return (
    <div>
      <header className="title">RESAS</header>
      <section class="container">
        <div class="selector">
          <div class="selector-title">都道府県</div>
          <ul class="selector-list">
            {states.map((state) => {
              return (
                <li class="selector-list-item">
                  <p>
                    <label for={`checkbox-${state}`}>{state}</label>
                    <input
                      id={`checkbox-${state}`}
                      name={`checkbox-${state}`}
                      type="checkbox"
                    />
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
        <div class="chart"></div>
      </section>
    </div>
  )
}

export default Main