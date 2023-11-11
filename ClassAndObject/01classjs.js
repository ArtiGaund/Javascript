class User{
    constructor( name, email){
        this.name = name;
        this.email = email;
    }
    #courseList = [];
    getInfo(){
        return { name: this.name, email: this.email};
    }
    enrollCourse(course){
        this.#courseList.push(course);
    }
    getCourseList(){
        return this.#courseList;
    }
}

// export default User;

const rock = new User("rock","rock@gmail.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
console.log(rock.getCourseList()); // o/p is displayed
console.log(rock.courseList); // o/p is undefined