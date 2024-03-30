import React from 'react'
import StudentHeader from './StudentHeader'

const Home = () => {
    return (
        <><StudentHeader /><div className="container">
            <div className="row">
                <div className="col">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://www.idp.com/medias/Student-Visas-500-1366x446-B-min.jpg?context=bWFzdGVyfGltYWdlc3w5MzEwOHxpbWFnZS9qcGVnfGFHVTVMMmd6TlM4eE1UZ3hNek0zTmpReU5qQXhOQzlUZEhWa1pXNTBJRlpwYzJGeklEVXdNQzB4TXpZMmVEUTBOaTFDTFcxcGJpNXFjR2N8Yjg2ZmU3YTk5ZjhhYjUzMzFkOGM5MTdiNTU4Mjg0NjkzMTBhOGU0NGY1MTQ2Yzc4M2RkYTQzN2ZlZTExM2NmOQ" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="..." class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="..." class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-12">
                                <div class="row">
                                    <div class="col-4">
                                        <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
                                            <nav class="nav nav-pills flex-column">
                                                <a class="nav-link" href="#item-1">Account</a>
                                                <nav class="nav nav-pills flex-column">
                                                    <a class="nav-link ms-3 my-1" href="#item-1-1">Services</a>
                                                    <a class="nav-link ms-3 my-1" href="#item-1-2">Products</a>
                                                </nav>
                                                <a class="nav-link" href="#item-2">Pricing</a>
                                                <a class="nav-link" href="#item-3">Schedule Demo</a>
                                                <nav class="nav nav-pills flex-column">
                                                    <a class="nav-link ms-3 my-1" href="#item-3-1">Contact us</a>
                                                    <a class="nav-link ms-3 my-1" href="#item-3-2">About us</a>
                                                </nav>
                                            </nav>
                                        </nav>
                                    </div>

                                    <div class="col-8">
                                        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
                                            <div id="item-1">
                                                <h4>Account</h4>
                                                <p>Username: This is the unique identifier for each user. It should be easy to remember and not reveal sensitive information.

                                                    Password: A strong password policy is essential for security. Encourage users to create passwords that are at least 8 characters long, with a mix of letters (both uppercase and lowercase), numbers, and symbols. You may also enforce password complexity rules to enhance security.

                                                    Email Address: Users typically use their email address for account verification and communication purposes. Ensure that the email address is valid and can receive messages.

                                                    Profile Information: Depending on the nature of the student website, you may collect additional profile information such as name, age, gender, school/college/university, major, interests, etc. Be mindful of data privacy regulations when collecting and storing this information.

                                                    Profile Picture: Users may want to upload a profile picture. Make sure to set guidelines for acceptable image formats and sizes.

                                                    Privacy Settings: Provide users with options to control their privacy settings, such as who can view their profile information and what information is visible to others.

                                                    Account Preferences: Allow users to customize their account preferences, such as language, theme, notification settings, etc.

                                                    Security Questions: Offer users the option to set up security questions and answers for account recovery purposes.

                                                    Two-Factor Authentication (2FA): Implement 2FA as an additional layer of security to protect user accounts from unauthorized access.

                                                    Terms of Service and Privacy Policy: Ensure that users agree to your website's terms of service and privacy policy during the account creation process. Include links to these documents for users to review.

                                                    Data Retention Policy: Clearly communicate how long you will retain user data and under what circumstances it will be deleted.

                                                    Parental Consent: If your website is targeted towards minors, consider implementing a parental consent mechanism in compliance with relevant laws such as COPPA (Children's Online Privacy Protection Act).

                                                    Account Verification: Implement a mechanism to verify user accounts, such as email verification or SMS verification, to prevent spam accounts and enhance security.

                                                    Accessibility: Ensure that the account creation process is accessible to users with disabilities, following WCAG (Web Content Accessibility Guidelines) standards.</p>
                                            </div>
                                            <div id="item-1-1">
                                                <h5>Services</h5>
                                                <p>Online Tutoring: Provide a platform where students can connect with tutors for assistance in various subjects. This can be either through live video sessions, pre-recorded lessons, or text-based chat.

                                                    Study Resources: Offer a repository of study materials such as notes, presentations, past exam papers, and educational videos to help students with their studies.

                                                    Career Guidance: Provide resources and guidance for career planning, including information about different career paths, internship opportunities, resume building tips, and interview preparation.

                                                    Student Discounts: Partner with local businesses or online retailers to offer exclusive discounts and deals for students on various products and services, such as software subscriptions, clothing, food delivery, etc.</p>
                                            </div>
                                            <div id="item-1-2">
                                                <h5>Products</h5>
                                                <p>Academic Tools:

                                                    Assignment Planner: A tool that helps students organize their assignments, set deadlines, and track their progress.
                                                    Grade Tracker: Allows students to input their grades for different courses and track their academic performance over time.
                                                    Study Guides: Provides access to study materials, summaries, and practice quizzes for various subjects.
                                                    Student Resources:

                                                    Scholarship Search Engine: Helps students find relevant scholarships based on their qualifications and interests.
                                                    Internship/Job Board: Connects students with internship and job opportunities in their field of study.
                                                    Tutoring Services: Facilitates access to tutoring services or peer tutoring for students who need academic assistance.
                                                    Community Features:

                                                    Student Forums: A platform for students to discuss academic topics, share resources, and seek advice from peers.
                                                    Clubs and Organizations Directory: Provides information about student clubs, organizations, and extracurricular activities available on campus.
                                                    Events Calendar: Keeps students informed about upcoming events, workshops, and seminars happening on campus.
                                                    Student Services:

                                                    Housing Portal: Helps students find housing options near their campus, including dormitories, apartments, and off-campus housing.
                                                    Health and Wellness Resources: Provides information about counseling services, health clinics, and wellness programs available to students.
                                                    Career Services: Offers resources such as resume building tools, interview tips, and career counseling services to help students prepare for their professional lives.
                                                </p>
                                            </div>
                                            <div id="item-2">
                                                <h4>Pricing</h4>
                                                <p>Domain Name: The cost of registering a domain name typically ranges from $10 to $50 per year, depending on the domain registrar and the chosen domain extension (.com, .net, .org, etc.).

                                                    Web Hosting: Hosting fees can vary depending on the hosting provider, the type of hosting (shared, VPS, dedicated), and the resources (bandwidth, storage, etc.) required. Shared hosting plans can start from as low as $3 to $10 per month, while more advanced options like VPS hosting might cost $20 to $100+ per month.

                                                    Website Design and Development: If you're hiring a professional web designer or developer to create your website, costs can vary widely based on their experience, the complexity of the design, and the number of pages/features you need. It can range from a few hundred to several thousand dollars.

                                                    Content Management System (CMS): Using a CMS like WordPress, Joomla, or Drupal can provide flexibility and ease of management for your website. Many CMS options are free, but you might incur costs for premium themes, plugins, or developer support.

                                                    Customization and Additional Features: If you require custom features or functionalities for your website, such as online forms, e-commerce capabilities, membership systems, etc., you may need to budget for development or integration costs.

                                                </p>
                                            </div>
                                            <div id="item-3">
                                                <h4>Schedule</h4>
                                                <p>Planning Phase:

                                                    Define the purpose and goals of the website.
                                                    Research target audience needs and preferences.
                                                    Determine website features and functionalities.
                                                    Create a project timeline and assign responsibilities.
                                                    Design Phase:

                                                    Develop wireframes and mockups for the website layout.
                                                    Choose a color scheme, typography, and visual elements.
                                                    Design the user interface (UI) and user experience (UX) elements.
                                                    Get feedback from stakeholders and make necessary revisions.
                                                    Development Phase:

                                                    Set up the development environment (local or remote server).
                                                    Choose appropriate technologies and frameworks (e.g., HTML, CSS, JavaScript, PHP, etc.).
                                                    Implement website features and functionalities based on the design.
                                                    Test the website for usability, responsiveness, and compatibility across different devices and browsers.
                                                    Debug and fix any issues that arise during testing.
                                                </p>
                                            </div>
                                            <div id="item-3-1">
                                                <h5>Contact us</h5>
                                                <p>Reach out to us :<a class="link-opacity-100" href="#">22-965-895</a></p>
                                                <p>Mail us :<a class="link-opacity-100" href="#">stdwebonline.edu.gmail.com</a></p>
                                            </div>
                                            <div id="item-3-2">
                                                <h5>About us</h5>
                                                <p>The primary aim of a student website is often to serve as an information hub for students. This includes providing access to resources such as class schedules, syllabi, academic calendars, and campus events.

                                                    Communication Platform: Facilitate communication between students, faculty, and staff. This could involve features like discussion forums, messaging systems, or chatbots to answer common queries.

                                                    Academic Support: Offer academic support services such as tutoring schedules, study guides, and links to online resources. This can help students enhance their learning experience outside the classroom.

                                                    Student Organizations: Provide a platform for student organizations to promote their activities, recruit members, and share updates. This fosters a sense of community and engagement among students.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default Home