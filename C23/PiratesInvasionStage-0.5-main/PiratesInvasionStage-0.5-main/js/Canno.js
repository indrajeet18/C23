
class Cannon {
    constructor(x,y,w,h,angle){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.angle=angle
    }
display(){
    rect (-10,-20,this.w,this.h)

    arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
}
}

