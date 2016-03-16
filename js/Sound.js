function Sound()
{
	
}


Sound.prototype.play = function(name)
{
    if (SOUND_SILENCE) {
        return false;
    }
    var ss = document.getElementById(name);
    ss.play();
};

















