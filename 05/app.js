import Junior from './classes/Junior';
import Mid from './classes/Mid';
import Programmer from './classes/Programmer';

const features = {
    skills: 10, 
    experience: 10, 
    willingness: 10,
}

const task = {
    difficult: 1,
    size: 1,
}

const programmer = new Programmer( features );
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(time);


const junior = new Junior();
const timeJunior = junior.getApproximateTimeTaskDoneInHours( task );
console.log(timeJunior, 'junior ');

const mid = new Mid();
const timeMid = mid.getApproximateTimeTaskDoneInHours( task );
console.log(timeMid, 'mid ');

const senior = new Mid();
const timeSenior = senior.getApproximateTimeTaskDoneInHours( task );
console.log(timeSenior, 'senior ');