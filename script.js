// 获取发光按钮元素
const glowBtn = document.getElementById('glowBtn');

// 鼠标跟随效果
document.addEventListener('mousemove', (e) => {
    // 获取鼠标位置
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // 更新按钮位置，使其跟随鼠标
    glowBtn.style.left = mouseX + 'px';
    glowBtn.style.top = mouseY + 'px';
    
    // 添加一些延迟效果，使移动更平滑
    setTimeout(() => {
        glowBtn.style.left = mouseX + 'px';
        glowBtn.style.top = mouseY + 'px';
    }, 10);
});

// 元素悬停效果增强
const elements = document.querySelectorAll('.element');

elements.forEach(element => {
    // 鼠标进入元素时
    element.addEventListener('mouseenter', () => {
        // 获取元素信息
        const number = element.dataset.number;
        const symbol = element.dataset.symbol;
        const name = element.dataset.name;
        const category = element.dataset.category;
        
        // 更新发光按钮文本显示元素信息
        glowBtn.textContent = `${symbol} - ${name}`;
        
        // 根据元素类别改变按钮颜色
        updateBtnColor(category);
    });
    
    // 鼠标离开元素时
    element.addEventListener('mouseleave', () => {
        // 恢复按钮默认文本
        glowBtn.textContent = '元素周期表';
        
        // 恢复按钮默认颜色
        resetBtnColor();
    });
    
    // 点击元素显示详细信息
    element.addEventListener('click', () => {
        const number = element.dataset.number;
        const symbol = element.dataset.symbol;
        const name = element.dataset.name;
        const mass = element.querySelector('.mass').textContent;
        const category = getCategoryName(element.dataset.category);
        
        alert(`元素信息：\n原子序数: ${number}\n元素符号: ${symbol}\n元素名称: ${name}\n原子质量: ${mass}\n元素类别: ${category}`);
    });
});

// 根据元素类别更新按钮颜色
function updateBtnColor(category) {
    const colors = {
        'alkali-metal': 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
        'alkaline-earth': 'linear-gradient(135deg, #ffa502, #ff7f50)',
        'transition': 'linear-gradient(135deg, #70a1ff, #5352ed)',
        'post-transition': 'linear-gradient(135deg, #7bed9f, #2ed573)',
        'metalloid': 'linear-gradient(135deg, #70a1ff, #1e90ff)',
        'nonmetal': 'linear-gradient(135deg, #a29bfe, #6c5ce7)',
        'halogen': 'linear-gradient(135deg, #fd79a8, #e84393)',
        'noble-gas': 'linear-gradient(135deg, #fdcb6e, #f39c12)',
        'lanthanide': 'linear-gradient(135deg, #e056fd, #be2edd)',
        'actinide': 'linear-gradient(135deg, #ff7675, #d63031)'
    };
    
    if (colors[category]) {
        glowBtn.style.background = colors[category];
    }
}

// 恢复按钮默认颜色
function resetBtnColor() {
    glowBtn.style.background = 'linear-gradient(135deg, #00d4ff, #7c3aed)';
}

// 获取类别中文名称
function getCategoryName(category) {
    const names = {
        'alkali-metal': '碱金属',
        'alkaline-earth': '碱土金属',
        'transition': '过渡金属',
        'post-transition': '后过渡金属',
        'metalloid': '类金属',
        'nonmetal': '非金属',
        'halogen': '卤素',
        'noble-gas': '稀有气体',
        'lanthanide': '镧系元素',
        'actinide': '锕系元素'
    };
    
    return names[category] || category;
}

// 页面加载完成后的初始化
window.addEventListener('load', () => {
    // 为元素添加类别类名以应用颜色
    elements.forEach(element => {
        const category = element.dataset.category;
        if (category) {
            element.classList.add(category);
        }
    });
    
    // 初始位置设置在页面中心
    glowBtn.style.left = '50%';
    glowBtn.style.top = '50%';
    
    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 添加触摸设备支持
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    
    // 更新按钮位置
    glowBtn.style.left = touchStartX + 'px';
    glowBtn.style.top = touchStartY + 'px';
});

document.addEventListener('touchmove', (e) => {
    e.preventDefault(); // 防止页面滚动
    const touch = e.touches[0];
    const touchX = touch.clientX;
    const touchY = touch.clientY;
    
    // 更新按钮位置
    glowBtn.style.left = touchX + 'px';
    glowBtn.style.top = touchY + 'px';
});

document.addEventListener('touchend', () => {
    // 触摸结束时可以添加一些效果
    glowBtn.style.transform = 'translate(-50%, -50%) scale(1.1)';
    setTimeout(() => {
        glowBtn.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 200);
});