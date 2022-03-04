class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.x= x
        this.y= y
        this.w= w
        this.h= h
        this.body= Bodies.rectangle(x,y,w,h,options)

    }
    show(){
        var pos= this.body.position
        push()
        rectMode(CENTER)
        noStroke()
        fill(148,127,126)
        rect(pos.x,pos.y,this.w,this.h)
        pop()
    }
}