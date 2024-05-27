import 'package:flutter/material.dart';
import 'package:sekolahdulu1/materi2.dart';
import 'course.dart'; 

void main() {
  runApp(materi1Screen());
}

class materi1Screen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: LiveCoursesScreen(),
    );
  }
}

class LiveCoursesScreen extends StatefulWidget {
  @override
  _LiveCoursesScreenState createState() => _LiveCoursesScreenState();
}

class _LiveCoursesScreenState extends State<LiveCoursesScreen> {
  int _selectedIndex = 0; 

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () {
            Navigator.pushReplacement(
              context,
              MaterialPageRoute(builder: (context) => materi2Screen()), 
            );
          },
        ),
        title: Text("Lesson"),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: ListView(
          children: [
            Text(
              "Today's Exercise",
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            CourseCard(
              teacher: "Hanna Rose",
              title: "Arithmetic Operations",
              time: "09-09 9:00 am",
              image: "assets/images/directions.jpg",
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => CourseScreen()), 
                );
              },
            ),
            CourseCard(
              teacher: "Hanna Rose",
              title: "Alghorithm",
              time: "10:30 - 11:30 am",
              image: "assets/images/directions.jpg",
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => CourseScreen()), 
                );
              },
            ),
            CourseCard(
              teacher: "Hanna Rose",
              title: "Al-Jabr",
              time: "10:30 - 11:30 am",
              image: "assets/images/directions.jpg",
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => CourseScreen()), 
                );
              },
            ),
            CourseCard(
              teacher: "Hanna Rose",
              title: "Geometry",
              time: "10:30 - 11:30 am",
              image: "assets/images/directions.jpg",
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => CourseScreen()), 
                );
              },
            ),
            CourseCard(
              teacher: "Hanna Rose",
              title: "Integers",
              time: "10:30 - 11:30 am",
              image: "assets/images/directions.jpg",
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => CourseScreen()), 
                );
              },
            ),
            CourseCard(
              teacher: "Hanna Rose",
              title: "Algebraic",
              time: "10:30 - 11:30 am",
              image: "assets/images/directions.jpg",
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => CourseScreen()), 
                );
              },
            ),
            CourseCard(
              teacher: "Hanna Rose",
              title: "Percentages",
              time: "10:30 - 11:30 am",
              image: "assets/images/directions.jpg",
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => CourseScreen()), 
                );
              },
            ),
            
          ],
        ),
      ),
      bottomNavigationBar: Padding(
        padding: EdgeInsets.all(16.0),
        child: ClipRRect(
          borderRadius: BorderRadius.vertical(top: Radius.circular(50), bottom: Radius.circular(50)),
          child: BottomAppBar(
            color: Colors.deepPurple, 
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                IconButton(
                  icon: Icon(Icons.home, color: _selectedIndex == 0 ? Colors.white : Colors.grey[400]), 
                  onPressed: () {
                    setState(() {
                      _selectedIndex = 1; 
                    });
                    Navigator.pushReplacement(
                      context,
                      MaterialPageRoute(builder: (context) => materi2Screen()), 
                    );
                  },
                ),
                IconButton(
                  icon: Icon(Icons.task_alt_outlined, color: _selectedIndex == 1 ? Colors.white : Colors.grey[400]), 
                  onPressed: () {
                    setState(() {
                      _selectedIndex = 1; 
                    });
                    Navigator.pushReplacement(
                      context,
                      MaterialPageRoute(builder: (context) => materi1Screen()), 
                    );
                  },
                ),

                IconButton(
                  icon: Icon(Icons.person, color: _selectedIndex == 2 ? Colors.white : Colors.grey[400]), 
                  onPressed: () {
                    setState(() {
                      _selectedIndex = 2; 
                    });
                  },
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class CourseCard extends StatelessWidget {
  final String teacher;
  final String title;
  final String time;
  final String image;
  final VoidCallback? onTap;

  CourseCard({
    required this.teacher,
    required this.title,
    required this.time,
    required this.image,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Card(
        margin: const EdgeInsets.symmetric(vertical: 8.0),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8.0),
        ),
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                title,
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: Colors.black,
                ),
              ),
              Container(
                padding: EdgeInsets.all(8.0),
                decoration: BoxDecoration(
                  color: Colors.deepPurple,
                  borderRadius: BorderRadius.circular(8.0),
                ),
                child: Icon(
                  Icons.bookmark,
                  color: Colors.white,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
