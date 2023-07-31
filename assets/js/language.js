/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
const languageStrings = {
  en: {
    home: 'Home',
    profile: 'Profile',
    education: 'Education',
    languages: 'Languages',
    aboutMe: 'About me',
    skills: 'Skills',
    experience: 'Experience',
    social: 'Social',
    intersts: 'Interests',
    name: 'B.Alexey',
    profession: 'Front-End Web Developer',
    'home-btn-download': 'Download CV',
    // Profile
    'profile-description':
      'My profile showcases my passion and experience as a frontend developer with a focus on web technologies. With a solid foundation in HTML, CSS, and JavaScript, I bring creativity and innovation to my projects. I have honed my skills through hands-on experience and working with various popular frameworks and libraries, allowing me to create responsive and dynamic interfaces.',
    // Education
    'education-title-skillup': 'SkillUp',
    'education-studies-skillup': 'Front-End Web Developer',
    'education-title-university': 'State University of Moldova',
    'education-studies-university': 'Economic',
    'education-title-college': 'Financial and Banking College',
    // Language
    'languages-name-english': 'English (A2)',
    'languages-name-russian': 'Russian (Fluent)',
    'languages-name-moldavian': 'Moldavian (A2)',
    // About me
    'about-me-description1':
      'I am an enthusiastic frontend developer with experience in web technologies. I have a strong knowledge of HTML, CSS, and JavaScript, as well as hands-on experience with popular frameworks and libraries. As a detail-oriented developer, I strive to create visually appealing and user-friendly interfaces that provide an exceptional user experience.',
    'about-me-description2':
      'I also pay attention not only to creating visually appealing and user-friendly interfaces but also to SEO and PageSpeed optimization. Understanding the importance of visibility in search engines and website performance, I implement SEO practices and strive to optimize page loading times.',
    'about-me-description3':
      'I have a strong understanding of responsive web design, enabling my projects to seamlessly adapt to various devices and screen sizes. With a keen focus on writing clean and user-friendly code, I always strive to follow best coding practices and industry standards.',
    'about-me-description4':
      'With a creative mindset, I enjoy collaborating with designers and fellow developers, transforming design concepts into functional and efficient web applications. My continuous eagerness to learn new technologies and stay updated on the latest industry trends enables me to create innovative and cutting-edge solutions.',
    'about-me-description5':
      'As a frontend developer, I find fulfillment in crafting intuitive and visually appealing user interfaces that positively impact end-users. I am eager to tackle new challenges and contribute to creating remarkable digital experiences.',
    'section-skills': 'Skills',
    // Expirience
    'section-experience': 'Experience',
    'experience-title-upwork': 'UpWork (Freelance)',
    'experience-profession-upwork': 'Front-End Web Developer',
    'experience-year': 'From 2021 to Present',
    'experience-description-upwork1':
      "My main responsibility is developing responsive websites for clients based on web designers' mockups. I collaborate with clients to understand their requirements and propose customized solutions. I create visually appealing and user-friendly websites tailored to specific client needs.",
    'experience-description-upwork2':
      'I utilize HTML, CSS, and JavaScript to build interactive and visually engaging user interfaces. The use of SASS preprocessors optimizes styles and enhances maintainability. To enhance website functionality, I incorporate frameworks and libraries.',
    'experience-description-upwork3':
      'I regularly analyze code and conduct optimizations to improve website loading speed. Leveraging my expertise in CSS animations and transitions, I add interactive elements that provide a pleasant user experience.',
    'experience-title-weblancer': 'Weblancer (Freelance)',
    'experience-profession-weblancer': 'Front-End Web Developer',
    'experience-year-weblancer': 'From 2021 to Present',
    'experience-description-weblancer1':
      'My main task is to develop responsive websites for clients. When collaborating with clients, I strive to understand their requirements and offer personalized solutions. Cross-browser compatibility, valid, and adaptive coding methods are at the core of my development process.',
    'experience-description-weblancer2':
      'I transform projects from PSD, Sketch, Figma, Zeplin, and Adobe XD into fully functional websites. My experience lies in creating adaptive and responsive websites that adjust to different screen sizes and devices.',
    'experience-title-freelancer': 'Freelancer',
    'experience-profession-freelancer': 'Front-End Web Developer',
    'experience-year-freelancer': 'From 2021 to Present',
    'experience-description-freelancer1':
      "My task as a freelancer is to provide web development services with a focus on creating high-quality and responsive websites. I aim to meet the clients' needs and offer customized solutions that align with their objectives.",
    'experience-description-freelancer2': 'Cross-browser compatible, valid, and responsive coding. Only clean and understandable code.',
    'experience-description-freelancer3':
      'I convert designs from PSD, Sketch, Figma, Zeplin, and Adobe XD into fully functional websites.',
    'experience-description-freelancer4': 'Adaptability, responsiveness (responsive design), and fluidity.',
    'experience-description-freelancer5': 'CSS3/JS website animations.',
    'experience-description-freelancer6': 'Maintenance, content management, and support for websites and e-commerce platforms.',
    // Interests
    'interests-name-music': 'Music',
    'interests-name-travel': 'Travel',
    'interests-name-coffee': 'Coffee',
    'interests-name-sport': 'Sport',
    'interests-name-self-dev': 'Self-dev',
  },
  ru: {
    home: 'Главная',
    profile: 'Профиль',
    education: 'Образование',
    languages: 'Языки',
    aboutMe: 'Обо мне',
    skills: 'Навыки',
    experience: 'Опыт',
    social: 'Соцсети',
    interests: 'Интересы',
    name: 'Б.Алексей',
    profession: 'Front-End Веб-разработчик',
    'home-btn-download': 'Скачать CV',
    // Profile
    'profile-description': 'Мой профиль демонстрирует мою увлеченность и опыт работы в качестве фронтенд-разработчика с акцентом на веб-технологии. Имея прочную основу в HTML, CSS и JavaScript, я привношу креативность и инновации в свои проекты. Я отточил свои навыки благодаря практическому опыту и работе с различными популярными фреймворками и библиотеками, что позволяет мне создавать отзывчивые и динамичные интерфейсы.',
    // Education
    'education-studies-skillup': 'Фронтенд-разработчик',
    'education-title-university': 'Государственный университет Молдовы',
    'education-studies-university': 'Экономический',
    'education-title-college': 'Финансово-банковский колледж',
    // Language
    'languages-name-english': 'Английский (A2)',
    'languages-name-russian': 'Русский (Свободно)',
    'languages-name-moldavian': 'Молдавский (A2)',
    // About me
    'about-me-description1': 'Я увлеченный фронтенд-разработчик с опытом работы в области веб-технологий. Я хорошо знаю HTML, CSS и JavaScript, а также имею практический опыт работы с популярными фреймворками и библиотеками. Как разработчик, ориентированный на детали, я стремлюсь создавать визуально привлекательные и удобные интерфейсы, обеспечивающие исключительный пользовательский опыт.',
    'about-me-description2': 'При этом я уделяю внимание не только созданию визуально привлекательных и удобных интерфейсов, но и SEO и PageSpeed оптимизации. Понимая важность видимости в поисковых системах и производительности сайта, я внедряю SEO-практики и стремлюсь оптимизировать время загрузки страниц.',
    'about-me-description3': 'Я хорошо знаю отзывчивый веб-дизайн, благодаря чему мои проекты легко адаптируются к различным устройствам и размерам экранов. Уделяя особое внимание написанию чистого и удобного кода, я всегда стараюсь следовать лучшим практикам кодирования и отраслевым стандартам.',
    'about-me-description4': 'Обладая творческим мышлением, я с удовольствием сотрудничаю с дизайнерами и коллегами-разработчиками, превращая дизайнерские концепции в функциональные и эффективные веб-приложения. Постоянное стремление изучать новые технологии и быть в курсе последних тенденций развития отрасли позволяет мне создавать инновационные и передовые решения.',
    'about-me-description5': 'Как фронтенд-разработчик, я нахожу удовлетворение в создании интуитивно понятных и визуально привлекательных пользовательских интерфейсов, которые оказывают положительное влияние на конечных пользователей. Я готов решать новые задачи и вносить свой вклад в создание замечательного цифрового опыта.',
    // Experience
    // UpWork
    'experience-title-upwork': 'UpWork (Фриланс)',
    'experience-year': 'С 2021 по н.в',
    'experience-description-upwork1': 'Моя основная обязанность - разработка отзывчивых веб-сайтов для клиентов на основе макетов, созданных веб-дизайнерами. В ходе сотрудничества с клиентами я выясняю их требования и предлагаю индивидуальные решения. Я создаю визуально привлекательные и удобные веб-сайты, отвечающие конкретным потребностям клиентов.',
    'experience-description-upwork2': 'Использую HTML, CSS и JavaScript для создания интерактивных и визуально привлекательных пользовательских интерфейсов. Использование препроцессоров SASS оптимизирует стили и повышает удобство сопровождения. Для повышения функциональности сайта я использую фреймворки и библиотеки.',
    'experience-description-upwork3': 'Я регулярно анализирую код и провожу оптимизацию для повышения скорости загрузки сайта. Используя свои знания в области CSS-анимации и переходов, я добавляю интерактивные элементы, которые обеспечивают приятное восприятие сайта.',
    // Weblancer
    'experience-title-weblancer': 'Weblancer (Фриланс)',
    'experience-description-weblancer1': 'Моя основная задача - разработка отзывчивых веб-сайтов для клиентов. При работе с клиентами я стремлюсь понять их требования и предложить индивидуальные решения. Кроссбраузерная совместимость, валидные и адаптивные методы кодирования - вот что лежит в основе моего процесса разработки.',
    'experience-description-weblancer2': 'Я превращаю проекты из PSD, Sketch, Figma, Zeplin и Adobe XD в полнофункциональные веб-сайты. Мой опыт заключается в создании адаптивных и отзывчивых веб-сайтов, которые адаптируются к различным размерам экранов и устройств.',
    // Freelace
    'experience-title-freelancer': 'Фрилансер',
    'experience-description-freelancer1': 'Моя задача как фрилансера заключается в предоставлении услуг по разработке веб-сайтов с акцентом на создание качественных и отзывчивых сайтов. Я стремлюсь удовлетворить потребности клиентов и предложить индивидуальные решения, соответствующие их целям.',
    'experience-description-freelancer2': 'Кроссбраузерная совместимость, валидное и отзывчивое кодирование. Только чистый и понятный код.',
    'experience-description-freelancer3': 'Я преобразую проекты из PSD, Sketch, Figma, Zeplin и Adobe XD в полнофункциональные веб-сайты.',
    'experience-description-freelancer4': 'Адаптивность, отзывчивость (отзывчивый дизайн) и плавность.',
    'experience-description-freelancer5': 'CSS3/JS-анимация веб-сайтов.',
    'experience-description-freelancer6': 'Сопровождение, управление контентом и поддержка веб-сайтов и платформ электронной коммерции.',
    // Interests
    'interests-name-music': 'Музыка',
    'interests-name-travel': 'Путешествия',
    'interests-name-coffee': 'Кофе',
    'interests-name-sport': 'Спорт',
    'interests-name-self-dev': 'Саморазвитие',
  },
};

function updateLanguage(language) {
  const elementsToUpdate = document.querySelectorAll('.lang[data-translate]');

  elementsToUpdate.forEach((element) => {
    const key = element.dataset.translate;
    element.textContent = languageStrings[language][key] || key;
  });
}

const languageSwitcher = document.getElementById('language-switcher');
languageSwitcher.addEventListener('change', (event) => {
  const selectedLanguage = event.target.value;
  updateLanguage(selectedLanguage);
});

updateLanguage('en');
