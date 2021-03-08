function extractValue(arr, key){
    return arr.reduce(function(arr,next){
        arr.push(next[key]);
        return arr;
    },[]);
};

function vowelCount(str){
    const vowels = "aeiou";
    return str.split('').reduce(function(obj,next){
        let lowerCased = next.toLowerCase()
        if(vowels.indexOf(lowerCased) !== -1){
            if(obj[lowerCased]){
                obj[lowerCased]++;
            } else {
                obj[lowerCased] = 1;
            }
        }
        return obj;
    }, {});
};

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next,idx){
        acc[idx][key] = value;
        return acc;
    },arr);
};

function partition(arr, cb){
    return arr.reduce(function(acc,next){
        if(cb(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
};
