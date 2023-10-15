exports.test = function test(description, fn){
    try{
        fn();
        console.log(`\x1b[32m ${description} \x1b[0m` );
    }
    catch (error){
        console.log(`\x1b[31m ${description} \x1b[0m` );
    }
}

exports.assert = function assert(isTrue){
    if (!isTrue){
        throw new Error();
    }
}

