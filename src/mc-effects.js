class MCParticles {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.prepend(this.canvas);
        
        // 初始化粒子
        this.particles = Array.from({length: 100}, () => ({
            x: Math.random() * innerWidth,
            y: Math.random() * innerHeight,
            size: Math.random() * 3 + 1,
            speed: Math.random() * 0.5 + 0.2,
            color: `hsl(${Math.random()*360}, 50%, 50%)`
        }));

        this.animate();
    }

    animate() {
        this.ctx.fillStyle = 'rgba(0,0,0,0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(p => {
            p.y -= p.speed;
            if(p.y < 0) p.y = innerHeight;
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
            this.ctx.fillStyle = p.color;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

new MCParticles();