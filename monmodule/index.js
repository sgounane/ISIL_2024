class RandomAge{
    constructor(minage=20,maxage=80){
        this.maxage=maxage;
        this.minage=minage;
    }

    getAge(){
        return parseInt(Math.random()*(this.maxage-this.minage)+this.minage)
    }
}



module.exports=RandomAge