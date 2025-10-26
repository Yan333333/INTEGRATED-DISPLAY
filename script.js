// 网页应用数据
const webApps = [
    {
        id: 1,
         name: "form-validator",
        image: "https://raw.githubusercontent.com/Yan333333/INTEGRATED-DISPLAY/main/images/form-validator.png",
        url: "https://register-form-one-silk.vercel.app/"
    },
    {
        id: 2,
        name: "todo-app",
        image: "https://raw.githubusercontent.com/Yan333333/INTEGRATED-DISPLAY/main/images/todo-app.png",
        url: "https://todo-kappa-seven-93.vercel.app/"
    },
    {
        id: 3,
        name: "quiz-game",
        image: "https://raw.githubusercontent.com/Yan333333/INTEGRATED-DISPLAY/main/images/quiz-game.png",
        url: "https://quiz-delta-three-99.vercel.app/"
    },
    {
        id: 4,
        name: "password-generator",
        image: "https://raw.githubusercontent.com/Yan333333/INTEGRATED-DISPLAY/main/images/password-generator.png",
        url: "https://password-azure-rho.vercel.app/"
    },
    {
        id: 5,
        name: "recipe-finder",
        image: "https://raw.githubusercontent.com/Yan333333/INTEGRATED-DISPLAY/main/images/recipe-finder.png",
        url: "https://recipe-three-eta.vercel.app/"
    }
];

// 动态生成卡片
document.addEventListener('DOMContentLoaded', function() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    webApps.forEach(app => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${app.image}" alt="${app.name}" class="card-image">
            <div class="card-title">${app.name}</div>
        `;
        
        // 添加点击事件
        card.addEventListener('click', () => {
            window.open(app.url, '_blank');
        });
        
        portfolioGrid.appendChild(card);
    });
});
