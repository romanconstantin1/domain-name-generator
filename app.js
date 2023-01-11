const pronoun = ["our","my","his","hers","their","whose","their"];
const adj = ["hard","giddy","acidic","amused","wiggly","cute","testy","sassy","tangy"];
const noun = ["ladder","orange","county","income","debt","person","river","insect","flight"];

function generator() {
for (let i=0; i<pronoun.length; i++){
    for (let j=0; j<adj.length; j++){
        for (let k=0; k<noun.length; k++){
            console.log(`${pronoun[i]}${adj[j]}${noun[k]}.com`)
        }
    }
}
}

generator();
