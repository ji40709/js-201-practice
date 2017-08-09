var BMICalculator = {
    height: 0,
    weight: 0,
    bmi: 0,
    calc: function(height, weight){
        this.height = height || 170;
        this.weight = weight || 65;
        this.bmi = this.weight / Math.pow((this.height / 100), 2);
        console.log(this.bmi);
    },
    getBMI: function(){
        return this.bmi;
    },
    getAdvice: function(){
        var bmi = this.bmi;
        
        if (bmi < 18.5) {
            console.log('體重過輕');
        } else if(18.5 <= bmi && bmi < 24) {
            console.log('正常範圍');
        } else {
            console.log('異常範圍');
        }
    }
};

var bmic = Object.create(BMICalculator);
bmic.calc(170, 65);
bmic.getBMI();
bmic.getAdvice();