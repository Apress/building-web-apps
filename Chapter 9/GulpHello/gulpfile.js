const { src, dest, series, parallel } = require('gulp');
const del = require('del');

const clean = function() {
	return del('output/');
};

const copy = function() {
	return src('hello.txt')
		.pipe(dest('output/'));
};


const TaskA = function() {
	return new Promise(function(resolve) { 
		setTimeout(() => resolve(), 500);
	});
};


const TaskB1 = function() {
	return new Promise(function(resolve) { 
		setTimeout(() => resolve(), 500);
	});
};

const TaskB2 = function() {
	return new Promise(function(resolve) { 
		setTimeout(() => resolve(), 500);
	});
};

const TaskC = function() {
	return new Promise(function(resolve) { 
		setTimeout(() => resolve(), 500);
	});
};

const TaskD1 = function() {
	return new Promise(function(resolve) { 
		setTimeout(() => resolve(), 500);
	});
};
const TaskD2A = function() {
	return new Promise(function(resolve) { 
		setTimeout(() => resolve(), 500);
	});
};
const TaskD2B = function() {
	return new Promise(function(resolve) { 
		setTimeout(() => resolve(), 500);
	});
};
const TaskD3 = function() {
	return new Promise(function(resolve) { 
		setTimeout(() => resolve(), 500);
	});
};

exports.clean = clean;
exports.copy = copy;
exports.build = series(clean, copy);




exports.tree = 
series(
	TaskA,
	parallel(TaskB1, TaskB2),
	TaskC,
	parallel(
		TaskD1,
		series(TaskD2A, TaskD2B),
		TaskD3
	)
);

exports.default = exports.build;