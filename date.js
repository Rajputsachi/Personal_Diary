module.exports.sachindate=sachindate;
function sachindate()
{
  var tmp = new Date();
  let options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  return tmp.toLocaleString("en-US",options);


}
module.exports.playing=playing;
function playing()
{
  var ss="sachin is here boss"
  return ss;
}
