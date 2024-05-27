import 'package:flutter/material.dart';
import 'materi1.dart'; 

void main() {
  runApp(materi2Screen());
}

class materi2Screen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: CoursesScreen(),
    );
  }
}

class CoursesScreen extends StatefulWidget {
  @override
  _CoursesScreenState createState() => _CoursesScreenState();
}

class _CoursesScreenState extends State<CoursesScreen> {
  int _selectedIndex = 1;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Today Lessons'),
        actions: [
          IconButton(
            icon: Icon(Icons.search),
            onPressed: () {},
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(height: 0),
              Container(
                padding: EdgeInsets.symmetric(horizontal: 16.0),
                decoration: BoxDecoration(
                  color: Colors.grey[200],
                  borderRadius: BorderRadius.circular(8.0),
                ),
                child: TextField(
                  decoration: InputDecoration(
                    icon: Icon(Icons.search),
                    border: InputBorder.none,
                    hintText: 'Search courses',
                  ),
                ),
              ),
              SizedBox(height: 20),
              Text('New Course', style: Theme.of(context).textTheme.headline6),
              SizedBox(height: 10),
              GridView.count(
                shrinkWrap: true,
                physics: NeverScrollableScrollPhysics(),
                crossAxisCount: 2,
                crossAxisSpacing: 10,
                mainAxisSpacing: 10,
                childAspectRatio: 0.75, 
                children: [
                  CourseCard(
                    imageUrl: 'assets/images/card1.jpg',
                    title: 'Math',
                    viewers: '71.3K',
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => materi1Screen()),
                      );
                    },
                  ),
                  CourseCard(
                    imageUrl: 'assets/images/card2.jpg',
                    title: 'Biology',
                    viewers: '57.3K',
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => materi1Screen()),
                      );
                    },
                  ),
                  CourseCard(
                    imageUrl: 'assets/images/card3.jpg',
                    title: 'Physic',
                    viewers: '102.5K',
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => materi1Screen()),
                      );
                    },
                  ),
                  CourseCard(
                    imageUrl: 'assets/images/card4.jpg',
                    title: 'Economics',
                    viewers: '85.7K',
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => materi1Screen()),
                      );
                    },
                  ),
                ],
              ),
              SizedBox(height: 20),
              Text('Popular Course', style: Theme.of(context).textTheme.headline6),
              SizedBox(height: 10),
              GridView.count(
                shrinkWrap: true,
                physics: NeverScrollableScrollPhysics(),
                crossAxisCount: 2,
                crossAxisSpacing: 10,
                mainAxisSpacing: 10,
                childAspectRatio: 0.75, 
                children: [
                  CourseCard(
                    imageUrl: 'assets/images/card1.jpg',
                    title: 'Math',
                    viewers: '120.4K',
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => materi1Screen()),
                      );
                    },
                  ),
                  CourseCard(
                    imageUrl: 'assets/images/card2.jpg',
                    title: 'Economics',
                    viewers: '95.3K',
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => materi1Screen()),
                      );
                    },
                  ),
                ],
              ),
            ],
          ),
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
                  icon: Icon(Icons.home, color: Colors.white), 
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
                  icon: Icon(Icons.task_alt_outlined, color: Colors.white), 
                  onPressed: () {
                    
                    setState(() {
                      _selectedIndex = 1; 
                    });
                    Navigator.pushReplacement(
                      context,
                      MaterialPageRoute(builder: (context) => materi1Screen()), 
                    );
                  },
                  color: _selectedIndex == 1 ? Colors.white : Colors.grey[400], 
                ),
                IconButton(
                  icon: Icon(Icons.person, color: Colors.white), 
                  onPressed: () {
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
  final String imageUrl;
  final String title;
  final String viewers;
  final VoidCallback onTap;

  CourseCard({
    required this.imageUrl,
    required this.title,
    required this.viewers,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Card(
        color: Colors.white, 
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8.0),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ClipRRect(
              borderRadius: BorderRadius.vertical(top: Radius.circular(8.0)),
              child: Image.asset(
                imageUrl,
                fit: BoxFit.cover,
                width: double.infinity,
                height: 150.0, 
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 8.0),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          title,
                          style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                        ),
                        SizedBox(height: 4),
                        Text(
                          '$viewers viewers',
                          style: TextStyle(color: Colors.grey),
                        ),
                      ],
                    ),
                  ),
                  Container(
                    height: 40,
                    width: 40,
                    decoration: BoxDecoration(
                      color: Colors.deepPurple,
                      shape: BoxShape.circle,
                    ),
                    child: IconButton(
                      icon: Icon(Icons.arrow_forward, color: Colors.white),
                      onPressed: onTap,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
    