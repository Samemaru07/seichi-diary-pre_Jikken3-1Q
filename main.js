// ページ全体の設定
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// ダークモードの状態を即復元
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    document.body.classList.add('dark-mode');
    document.documentElement.style.setProperty('--main-color', '#4a4a4a');
    document.documentElement.style.setProperty('--text-color', '#fff');
    document.documentElement.style.setProperty('--bg-color', '#333');
}

// ローディング画面の背景色を即設定
const loadingOverlay = document.getElementById('loading-overlay');
if (loadingOverlay) {
    loadingOverlay.style.transition = 'opacity 0.5s ease';
    if (isDarkMode) {
        loadingOverlay.style.backgroundColor = '#1a1a1a';
    } else {
        loadingOverlay.style.backgroundColor = '#fff';
    }
}

// DOMContentLoadedイベントで追加設定
document.addEventListener('DOMContentLoaded', () => {
    if (isDarkMode) {
        const dorrBtn = document.getElementById('dorrBtn');
        if (dorrBtn) {
            dorrBtn.textContent = "☀";
        }
    }
});

// トップページ
const topPage = document.getElementById("topPage");

if (topPage) {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const header = document.getElementById("header");
    const sideNavL = document.getElementById("sideNavL");
    const sideNavR = document.getElementById("sideNavR");
    const main = document.getElementById("main");
    const mainP = document.getElementById("mainP");
    const topImages = document.getElementById("topImages");
    const SEED = document.getElementById("SEED");
    const fafner = document.getElementById("fafner");
    const dorrBtn = document.getElementById("dorrBtn");
    const mainTitle = document.getElementById("mainTitle");
    const firstP = document.getElementById("firstP");
    const secondP = document.getElementById("secondP");
    const thirdP = document.getElementById("thirdP");

    if (main) {
        main.classList.add("show");
    }

    // ハンバーガーメニューのクリックイベント制御
    let isHamburgerEnabled = true;

    function checkWindowSize() {
        if (window.innerWidth <= 640) {
            isHamburgerEnabled = false;
            hamburgerBtn.style.cursor = 'default';
            hamburgerBtn.style.opacity = '0.5';
        } else {
            isHamburgerEnabled = true;
            hamburgerBtn.style.cursor = 'pointer';
            hamburgerBtn.style.opacity = '1';
        }
    }

    checkWindowSize();

    window.addEventListener('resize', checkWindowSize);

    hamburgerBtn.addEventListener("click", () => {
        if (!isHamburgerEnabled) return;

        header.classList.toggle("hide");
        sideNavL.classList.toggle("hide");
        sideNavR.classList.toggle("hide");
        main.classList.toggle("hide");
        mainP.classList.toggle("hide");
        topImages.classList.toggle("hide");
        SEED.classList.toggle("hide");
        fafner.classList.toggle("hide");
        mainTitle.classList.toggle("hide");
        firstP.classList.toggle("hide");
        secondP.classList.toggle("hide");
        thirdP.classList.toggle("hide");
    });

    dorrBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem('darkMode', isDarkMode);
        if (isDarkMode) {
            dorrBtn.textContent = "☀";
            document.documentElement.style.setProperty('--main-color', '#4a4a4a');
            document.documentElement.style.setProperty('--text-color', '#fff');
            document.documentElement.style.setProperty('--bg-color', '#333');
        } else {
            dorrBtn.textContent = "🌙";
            document.documentElement.style.setProperty('--main-color', '#ffc0cb');
            document.documentElement.style.setProperty('--text-color', '#333');
            document.documentElement.style.setProperty('--bg-color', '#fff');
        }
    });
}

// プロフィールページ
const profilePage = document.getElementById("profilePage");

if (profilePage) {
    const profImages = document.getElementById("profImages");
    const firstP = document.getElementById("firstP");
    const secondP = document.getElementById("secondP");
    const barbatos = document.getElementById("barbatos");
    const destiny = document.getElementById("destiny");
    const kongo = document.getElementById("kongo");
    const ares = document.getElementById("ares");
    const footer = document.getElementById("footer");
    const profPageGotoSNSBtn = document.getElementById("profPageGotoSNSBtn");
    const mainTitle = document.getElementById("mainTitle");
    const main = document.getElementById("main");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const header = document.getElementById("header");
    const sideNavL = document.getElementById("sideNavL");
    const sideNavR = document.getElementById("sideNavR");
    const mainP = document.getElementById("mainP");
    const dorrBtn = document.getElementById("dorrBtn");

    if (main) {
        main.classList.add("show");
    }

    hamburgerBtn.addEventListener("click", () => {
        header.classList.toggle("hide");
        sideNavL.classList.toggle("hide");
        sideNavR.classList.toggle("hide");
        main.classList.toggle("hide");
        mainP.classList.toggle("hide");
        profImages.classList.toggle("hide");
        firstP.classList.toggle("hide");
        secondP.classList.toggle("hide");
        barbatos.classList.toggle("hide");
        destiny.classList.toggle("hide");
        kongo.classList.toggle("hide");
        ares.classList.toggle("hide");
        footer.classList.toggle("hide");
        profPageGotoSNSBtn.classList.toggle("hide");
        mainTitle.classList.toggle("hide");
    });

    dorrBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem('darkMode', isDarkMode);
        if (isDarkMode) {
            dorrBtn.textContent = "☀";
            document.documentElement.style.setProperty('--main-color', '#4a4a4a');
            document.documentElement.style.setProperty('--text-color', '#fff');
            document.documentElement.style.setProperty('--bg-color', '#333');
        } else {
            dorrBtn.textContent = "🌙";
            document.documentElement.style.setProperty('--main-color', '#ffc0cb');
            document.documentElement.style.setProperty('--text-color', '#333');
            document.documentElement.style.setProperty('--bg-color', '#fff');
        }
    });
}

// SNSページ
const snsPage = document.getElementById("snsPage");

if (snsPage) {
    const mainTitle = document.getElementById("mainTitle");
    const mainText = document.getElementById("mainText");
    const SNSPageGotoTechBlogBtn = document.getElementById("SNSPageGotoTechBlogBtn");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const header = document.getElementById("header");
    const sideNavL = document.getElementById("sideNavL");
    const sideNavR = document.getElementById("sideNavR");
    const main = document.getElementById("main");
    const dorrBtn = document.getElementById("dorrBtn");
    const snsBtn = document.querySelector(".snsBtn");

    if (main) {
        main.classList.add("show");
    }

    hamburgerBtn.addEventListener("click", () => {
        header.classList.toggle("hide");
        sideNavL.classList.toggle("hide");
        sideNavR.classList.toggle("hide");
        mainTitle.classList.toggle("hide");
        mainText.classList.toggle("hide");
        snsBtn.classList.toggle("hide");
        SNSPageGotoTechBlogBtn.classList.toggle("hide");
    });

    dorrBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem('darkMode', isDarkMode);
        if (isDarkMode) {
            dorrBtn.textContent = "☀";
            document.documentElement.style.setProperty('--main-color', '#4a4a4a');
            document.documentElement.style.setProperty('--text-color', '#fff');
            document.documentElement.style.setProperty('--bg-color', '#333');
        } else {
            dorrBtn.textContent = "🌙";
            document.documentElement.style.setProperty('--main-color', '#ffc0cb');
            document.documentElement.style.setProperty('--text-color', '#333');
            document.documentElement.style.setProperty('--bg-color', '#fff');
        }
    });
}

// 技術記事ページ
const techBlogPage = document.getElementById("techBlogPage");

if (techBlogPage) {
    const mainTitle = document.getElementById("mainTitle");
    const firstP = document.getElementById("firstP");
    const secondP = document.getElementById("secondP");
    const githubBtn = document.getElementById("githubBtn");
    const backBtn = document.getElementById("backBtn");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const header = document.getElementById("header");
    const sideNavL = document.getElementById("sideNavL");
    const sideNavR = document.getElementById("sideNavR");
    const main = document.getElementById("main");
    const mainP = document.getElementById("mainP");
    const dorrBtn = document.getElementById("dorrBtn");

    if (main) {
        main.classList.add("show");
    }

    hamburgerBtn.addEventListener("click", () => {
        header.classList.toggle("hide");
        sideNavL.classList.toggle("hide");
        sideNavR.classList.toggle("hide");
        main.classList.toggle("hide");
        mainP.classList.toggle("hide");
        mainTitle.classList.toggle("hide");
        firstP.classList.toggle("hide");
        secondP.classList.toggle("hide");
        githubBtn.classList.toggle("hide");
        backBtn.classList.toggle("hide");
    });

    dorrBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem('darkMode', isDarkMode);
        if (isDarkMode) {
            dorrBtn.textContent = "☀";
            document.documentElement.style.setProperty('--main-color', '#4a4a4a');
            document.documentElement.style.setProperty('--text-color', '#fff');
            document.documentElement.style.setProperty('--bg-color', '#333');
        } else {
            dorrBtn.textContent = "🌙";
            document.documentElement.style.setProperty('--main-color', '#ffc0cb');
            document.documentElement.style.setProperty('--text-color', '#333');
            document.documentElement.style.setProperty('--bg-color', '#fff');
        }
    });
}

// ローディング
window.onload = () => {
    const bar = document.getElementById("progress-bar");
    const text = document.getElementById("progress-text");
    const overlay = document.getElementById("loading-overlay");
    const body = document.getElementById("body");
    const header = document.querySelector("header");
    const sideNavL = document.querySelector(".sideNavL");
    const sideNavR = document.querySelector(".sideNavR");

    if (bar && text && overlay && body) {
        requestAnimationFrame(() => {
            bar.style.width = '100%';
            text.textContent = '100%';

            setTimeout(() => {
                overlay.style.opacity = '0';
                body.style.display = 'block';
                body.classList.add("show");

                requestAnimationFrame(() => {
                    if (header) header.classList.add("show");
                    if (sideNavL) sideNavL.classList.add("show");
                    if (sideNavR) sideNavR.classList.add("show");

                    setTimeout(() => {
                        const main = document.getElementById("main");
                        if (main) main.classList.add("show");
                    }, 100);
                });

                setTimeout(() => {
                    overlay.style.display = 'none';
                }, 500);
            }, 300);
        });
    }
};

// ハンバーガーメニューの制御
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sideNavL = document.getElementById('sideNavL');
    const sideNavR = document.getElementById('sideNavR');
    let isMenuOpen = false;

    hamburgerBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            sideNavL.classList.add('active');
            sideNavR.classList.add('active');
            hamburgerBtn.textContent = '×';
        } else {
            sideNavL.classList.remove('active');
            sideNavR.classList.remove('active');
            hamburgerBtn.textContent = '≡';
        }
    });

    // 画面サイズが変更された時の処理
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sideNavL.classList.remove('active');
            sideNavR.classList.remove('active');
            hamburgerBtn.textContent = '≡';
            isMenuOpen = false;
        }
    });
});