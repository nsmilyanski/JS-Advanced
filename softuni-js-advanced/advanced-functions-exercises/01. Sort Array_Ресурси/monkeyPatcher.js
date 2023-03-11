// solution = (() => {
//     const commands = {
//         upvote: (post) => post.upvotes++,
//         downvote: (post) => post.downvotes++,
//         score: (post) => {
//             let {upvotes, downvotes} = post;
//             let total = upvotes + downvotes;
//             // let balance = upvotes - downvotes;
 
//             let obfuscated = Math.ceil(0.25 * Math.max(upvotes,downvotes));
//             let obfuscatedUpVotes = upvotes + obfuscated;
//             let obfuscatedDownVotes = downvotes + obfuscated;
//             let balance = obfuscatedUpVotes - obfuscatedDownVotes;

//             let rating = '';
 
//             if (total < 10) {
//               rating = 'new';
//             } else if (upvotes > total * 0.66) {
//               rating = 'hot';
//             } else if (balance >= 0 && (upvotes > 100 || downvotes > 100)) {
//               rating = 'controversial';
//             } else if (balance < 0) {
//               rating = 'unpopular';
//             } else {
//               rating = 'new';
//             }
//              if (total > 50) {
//                  return [obfuscatedUpVotes, obfuscatedDownVotes, balance, rating];
//             }
//             return [upvotes, downvotes, balance, rating];
//           }
//     };
 
//     return {call:(post, command) => commands[command](post)}
// })();

// let post = {
//     id: '3',
//     author: 'emil',
//     content: 'wazaaaaa',
//     upvotes: 100,
//     downvotes: 100
// };
// solution.call(post, 'upvote');
// solution.call(post, 'downvote');
// let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// solution.call(post, 'downvote');         // (executed 50 times)
// score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']

const solution = {
  id: 1,
  author: "",
  content: "",
  upvotes: 0,
  downvotes: 0,
  call: function (object, arguments) {
    switch (arguments) {
      case "upvote":
        object.upvotes++;
        break;
      case "downvote":
        object.downvotes++;
        break;
      case "score":
        let positiveVotes = object.upvotes;
        let negativeVotes = object.downvotes;
        let balance = positiveVotes - negativeVotes;
        let rating = "new";

        if (positiveVotes + negativeVotes >= 10) {
          if (positiveVotes / (positiveVotes + negativeVotes) > 0.66) {
            rating = "hot";
          } else if (balance >= 0 && positiveVotes + negativeVotes > 100) {
            rating = "controversial";
          } else if (balance < 0) {
            rating = "unpopular";
          }

          if (positiveVotes + negativeVotes > 50) {
            const obfuscationFactor = Math.ceil(Math.max(positiveVotes, negativeVotes) * 0.25);
            positiveVotes += obfuscationFactor;
            negativeVotes += obfuscationFactor;
          }
        }

        return [positiveVotes, negativeVotes, balance, rating];
        break;
      default:
        return "Invalid command";
        break;
    }
  }
};

let post = {
  id: '3',
  author: 'emil',
  content: 'wazaaaaa',
  upvotes: 100,
  downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']

