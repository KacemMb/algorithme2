function dot_product(v1, v2) {
    if (v1.length !== v2.length) {
        throw new Error("Vectors must have the same length.");
    }
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }

    return ps;
}
function areOrthogonal(v1, v2) {
    const product = dot_product(v1, v2);
    if(product === 0){
        return true;
    }else{
        return false
    }
}

function checkOrthogonality(n, vectorPairs) {
    for (let i = 0; i < n; i++) {
        const v1 = vectorPairs[i][0];
        const v2 = vectorPairs[i][1];

        const orthogonal = areOrthogonal(v1, v2);

        if(orthogonal === true){
            console.log(v1,"et",v2,"sont orthogoneaux");
        }else{
            console.log(v1,"et",v2,"ne sont pas orthogoneaux");
        }
    }
}

//testing :)
const numberOfPairs = 3;
const vectors = [[[1, 0],[0, 1]],[[1, 2],[2, -1]],[[3, 1],[-2, -6]]];
checkOrthogonality(numberOfPairs, vectors);

