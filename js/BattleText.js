function BattleText(x, y, str, type)
{ 
	Sprite.call(this, x, y, "score", type);
	
	this.str = str;
    this.type = type;
	this.time = 0;
    this.fontSize = 16;
}

BattleText.prototype = new Sprite();

BattleText.prototype.draw = function (canvas)
{
	var myCanvas = document.getElementById(canvas);
	var graphics = myCanvas.getContext("2d");
	
	//graphics.drawImage(img, images[this.src][0], sc + images[this.src][1], 28, 14, this.x + offerX  - 14, this.y + offerY  - 7, 28, 14 ) ;	

    
    graphics.font = this.fontSize+"px Courier New";
    graphics.fillStyle = 'rgb(255,'+(240-this.type*80)+',20)';
    // 必须添加baseline属性 不然擦除不了 决定绘出文字的位置
    graphics.textBaseline = 'top';
    graphics.fillText(this.str, this.x + offerX - 10, this.y + offerY - 7);
	
	return;
};

BattleText.prototype.updata = function()
{
	this.time ++;
};

BattleText.prototype.clear = function(canvas)
{
	var myCanvas = document.getElementById(canvas);
	var graphics = myCanvas.getContext("2d");
	
	graphics.clearRect(this.x + offerX - 10, this.y + offerY - 7, graphics.measureText(this.str).width, this.fontSize);
};

BattleText.ARR_TYPE = {};
BattleText.ARR_TYPE.player_dmg = 'player_dmg';
BattleText.ARR_TYPE.player_hurt = 'player_hurt';//1
BattleText.ARR_TYPE.player_miss = 'player_miss';
BattleText.ARR_TYPE.bot_miss = 'bot_miss';


function drawBattleTexts()
{
	for(var i = 0;i < battleTexts.length; i ++)
	{
		battleTexts[i].draw("upp");
		battleTexts[i].updata();
		
		if(battleTexts[i].time >30 )
		{
			battleTexts[i].clear("upp");
			
			battleTexts.splice(i,1);
			i --;
		}
	}
}


