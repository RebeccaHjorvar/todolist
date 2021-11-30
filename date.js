//jshint esversion:6

module.exports = GetDate;

const GetDate = () =>{
    let today = new Date();

    let options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };
  
    let day = today.toLocaleDateString("en-US", options);
    return day;
}