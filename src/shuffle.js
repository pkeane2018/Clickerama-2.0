let shuffle = function (a) {
    var i = a.length;
    while (0 !== i) {
        let j = Math.floor(Math.random() * i);
        i--;
        var temp = a[i];
        a[i] = a[j]
        a[j] = temp
    };
    console.log(a);
};

var array = [1, 2, 3, 4, 5, 6, 7,];

shuffle(array);
