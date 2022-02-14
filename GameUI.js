class GameUI
{
    constructor()
    {
        this.canvas = document.getElementById('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        ctx = this.canvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;

        this.leftScoreXPos = window.innerWidth / 5;
        this.rightScoreXPos = this.leftScoreXPos * 4;
        this.ScoreYPos = window.innerHeight / 20;
    }

    DrawScore()
    {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.font = "40px Georgia, serif";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(playerScore, this.leftScoreXPos, this.ScoreYPos);
        ctx.fillText(enemyScore, this.rightScoreXPos, this.ScoreYPos);
    }

}