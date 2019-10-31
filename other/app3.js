const double = number => number * 2;
const double1 = (number) => {
  return number * 2;
}
const double2 = (number) => number * 2;
console.log(double(2));
console.log(double1(21));
console.log(double2(1));

// //  改变了this的指向
// const team = {
//   members: ["Henry", "Elyse"],
//   teamName: "es6",
//   teamSummary: function () {
//     return this.members.map(function (member) {
//       return `${member}隶属于 ${this.teamName}`;
//     }.bind(this))
//   }
// }
// console.log(team.teamSummary());

const team1 = {
  members: ["Herry", "Elyse"],
  teamName: "es6",
  teamSummary: function () {
    let this_ = this;
    return this.members.map(member => {
      return `${member}隶属于${this_.teamName}`;
    })
  }
}
console.log(team1.teamSummary());