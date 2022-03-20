console.log('=== check for type and value equality while == only for value');
if (true !== 1) {
	console.log('true !== 1');
}
if (true == 1) {
	console.log('true == 1');
}
if (false == "") {
	console.log('false == ""');
}
if (0 == "") {
	console.log('0 == ""');
}
if (null == null) {
	console.log('null == null');
}
if (undefined == undefined) {
	console.log('undefined == undefined');
}
if (null == undefined) {
	console.log('undefined == undefined');
}
if (NaN != NaN) {
	console.log('NaN != NaN');
}
if (NaN != null) {
	console.log('NaN != null');
}
if (NaN != undefined) {
	console.log('NaN != undefined');
}
