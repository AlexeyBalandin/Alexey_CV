/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint linebreak-style: 0 */
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
      'Over 3 years of experience in frontend development. I\'ve worked with international clients turning design mockups into responsive, pixel-perfect websites. From lendings to scalable platforms, I create solutions that support business goals and deliver measurable results.',
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
      'I help businesses and startups create fast, responsive, and visually appealing websites that not only look and work well, but also solve business problems. I specialize in clean and semantic code, PageSpeed and SEO optimization, and user-friendly and responsive design, ensuring that every project delivers real results.',
    // Skills
    'section-skills': 'Skills',
    // Expirience
    // UpWork
    'section-experience': 'Experience',
    'experience-title-upwork': 'UpWork (Freelance)',
    'experience-profession-upwork': 'Front-End Web Developer | 2021 – Present',
    'experience-year-upwork': '2021 - Present',
    'experience-description-upwork1':
      'Delivered 20+ responsive websites for international clients, tailored to business goals and brand identity.',
    'experience-description-upwork2':
      'Improved website loading speed by up to 40% through code optimization and smart use of animations/transitions.',
    'experience-description-upwork3':
      'Collaborated with designers and product managers to transform Figma / XD / PSD mockups into pixel-perfect, functional websites.',
    'experience-description-upwork4':
      'Implemented SEO and accessibility best practices, ensuring higher search visibility and better user experience.',
    // Weblancer
    'experience-title-weblancer': 'Weblancer (Freelance)',
    'experience-profession-weblancer': 'Front-End Web Developer | 2021 – Present',

    'experience-description-weblancer1':
      'Developed custom solutions for startups and businesses, creating adaptive designs that adjust seamlessly to all screen sizes.',
    'experience-description-weblancer2':
      'Ensured cross-browser compatibility and W3C-valid code, delivering reliable and maintainable websites.',
    'experience-description-weblancer3':
      'Integrated modern frameworks and preprocessors (SCSS, Bootstrap, Webpack) to streamline development.',
    // Freelancer
    'experience-title-freelancer': 'Freelancer',
    'experience-profession-freelancer': 'Front-End Web Developer | 2021 – Present',

    'experience-description-freelancer1':
      'Converted design concepts into fully functional, responsive websites.',
    'experience-description-freelancer2':
      'Built engaging CSS3 animations to improve UI interactivity.',
    'experience-description-freelancer3':
      'Provided maintenance, updates, and content management for e-commerce and corporate websites.',
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
    'profile-description': 'Более 3 лет опыта во фронтенд-разработке. Работал с международными клиентами, превращая дизайн-макеты в адаптивные, пиксель-перфект сайты. От лендингов до масштабируемых платформ — создаю решения, которые поддерживают бизнес-цели и дают измеримый результат.',
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
    'about-me-description1': 'Я помогаю бизнесам и стартапам создавать быстрые, адаптивные и визуально привлекательные сайты, которые не просто хорошо выглядят и работают — они решают бизнес-задачи. Моя специализация — чистый и семантичный код, PageSpeed и SEO-оптимизация, удобный и адаптивный дизайн, благодаря чему каждый проект приносит реальные результаты.',
    // Experience
    // UpWork
    'experience-title-upwork': 'UpWork (Фриланс)',
    'experience-profession-upwork': 'Front-End Web Developer | 2021 – наст. время',
    'experience-description-upwork1': 'Реализовал 20+ адаптивных сайтов для международных клиентов.',
    'experience-description-upwork2': 'Ускорил загрузку проектов до 40% за счёт оптимизации кода, анимаций и изображений.',
    'experience-description-upwork3': 'Превращал макеты из Figma/XD/PSD в полностью рабочие сайты с кроссбраузерной совместимостью.',
    // Weblancer
    'experience-title-weblancer': 'Weblancer (Фриланс)',
    'experience-profession-weblancer': 'Front-End Web Developer | 2021 – наст. время',
    'experience-description-weblancer1': 'Разработал индивидуальные решения для стартапов и бизнеса, создавая адаптивные дизайны, которые подстраиваются под все размеры экранов.',
    'experience-description-weblancer2': 'Писал валидный, SEO-дружественный и mobile-first код.',
    'experience-description-weblancer3': 'Создавал кастомные решения для стартапов и малого бизнеса.',
    // Freelancer
    'experience-title-freelancer': 'Фрилансер',
    'experience-profession-freelancer': 'Front-End Web Developer | 2021 – наст. время',
    'experience-description-freelancer1': 'Делал сайты с акцентом на UI и анимации CSS3.',
    'experience-description-freelancer2': 'Разрабатывал и поддерживал проекты на WordPress с кастомными темами.',
    'experience-description-freelancer3': 'Обеспечивал обслуживание, обновление и управление контентом веб-сайтов электронной коммерции и корпоративных сайтов.',
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
