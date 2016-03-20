function TankStart(x, y, type)
{
	Sprite.call(this, x, y, "tankStart", 32);
	
	this.frame = 0;
	this.time =  0;
	this.num = 0;
    this.type = type;   // 为了区分是不是boss
}

TankStart.prototype = new Sprite();

TankStart.prototype.draw = function(canvas)
{
	var myCanvas = document.getElementById(canvas);
	var graphics = myCanvas.getContext("2d");
	var img = document.getElementById("tankAll");
	
	graphics.drawImage(img, 32 * this.frame + images[this.src][0], images[this.src][1], 32, 32, this.x + offerX,this.y + offerY,32,32) ;
    
	
	return;
};

TankStart.prototype.updata = function()
{
	if(this.time%4 == 1) {this.frame++;}

	if(this.frame > 3)  
	{
		this.frame = 0;
		this.num ++;
	}

	this.time ++;
};


function updataTankStarts()
{
	for(var i = 0;i < tankStarts.length;i++)
	{
        // 绘制开始动画
		tankStarts[i].updata();
		
		if(tankStarts[i].num >= 1 )
		{
            var type = tankStarts[i].type == 4 ? 4 : (parseInt(Math.random() * 3) + 1);
            addTank(tankStarts[i].x, tankStarts[i].y, type);
			tankStarts.splice(i,1);
			i --;
		}	
	}
}


function drawTankStarts()
{
	for(var i = 0;i < tankStarts.length;i++)
	{
		tankStarts[i].draw("main");
	}
}















