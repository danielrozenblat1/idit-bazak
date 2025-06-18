import React, { useState, useRef } from 'react';
import { 
  Sparkles, Heart, Eye, Brush, Palette, Scissors, Camera, 
  Award, Users, Clock, Calendar, Star, Plus, Minus, Zap,
  Target, Layers, Crown, BookOpen, TrendingUp, CheckCircle,
  Lightbulb, Focus, Trophy, Instagram, PenTool, Shield,
  UserCheck, Search, Activity, Wand2, Flower2, ArrowDown,
  Building, DollarSign, Settings, MessageCircle, PlayCircle,
  Smartphone, BarChart3, Share2, FileText, Map, PhoneCall,
  Handshake, Monitor, ShoppingCart, Megaphone, Upload
} from 'lucide-react';
import styles from './Sillabus.module.css';
import EligibilitySection from '../whoFits/WhoFits';

const ClinicManagementSyllabus = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Form states
  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    reason: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form refs
  const fullNameRef = useRef(null);
  const phoneRef = useRef(null);
  const reasonRef = useRef(null);


  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Scroll to form function
  const scrollToForm = () => {
    const formElement = document.getElementById('טופס');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };



  const sessions = [
    {
      number: 1,
      title: "יום ראשון - יסודות הקמת קליניקה",
      duration: "4-5 שעות",
      content: [
        { text: "הקדמה ומינגלינג - היכרות והעמקת קשרים", icon: <Handshake className={styles.contentIcon} /> },
        { text: "מטרות הקורס והציפיות ליום", icon: <Target className={styles.contentIcon} /> },
        { text: "רקע מקצועי ונסיון מהשטח", icon: <BookOpen className={styles.contentIcon} /> },
        { text: "הכנה מקצועית וידע בסיסי הכרחי", icon: <Shield className={styles.contentIcon} /> },
        { text: "מה עגלת הטיפולים שלנו צריכה להכיל", icon: <ShoppingCart className={styles.contentIcon} /> },
        { text: "רשימת המלצות לחברות skin care לתחילת עבודה", icon: <Star className={styles.contentIcon} /> },
        { text: "המלצות למכשור ראשוני בקליניקה", icon: <Settings className={styles.contentIcon} /> }
      ]
    },
    {
      number: 2,
      title: "יום שני - בניית עסק דיגיטלי מצליח",
      duration: "4-5 שעות",
      content: [
        { text: "איך להקים קליניקה מצליחה ובניית סיסטם חזק", icon: <Building className={styles.contentIcon} /> },
        { text: "בניית עמודים עסקיים ברשתות החברתיות", icon: <Instagram className={styles.contentIcon} /> },
        { text: "פרקטיקה יומיומית בניהול העסק", icon: <BarChart3 className={styles.contentIcon} /> },
        { text: "אסטרטגיות שיווק ופרסום מתקדמות", icon: <Megaphone className={styles.contentIcon} /> },
        { text: "הקמת קמפיינים ממומנים רווחיים", icon: <DollarSign className={styles.contentIcon} /> },
        { text: "עריכות באפליקציות למראה מקצועי", icon: <Smartphone className={styles.contentIcon} /> },
        { text: "מענה לשאלות ופתרון בעיות מהשטח", icon: <MessageCircle className={styles.contentIcon} /> }
      ]
    },
    {
      number: 3,
      title: "יום שלישי - תכנון עתידי וצילום מקצועי",
      duration: "4-5 שעות",
      content: [
         { text: "למידת טכניקת עבודה מעשית", icon:  <FileText className={styles.contentIcon} /> },
        { text: "ניהול ותכנון עתידי לטווח ארוך", icon: <Map className={styles.contentIcon} /> },
        { text: "תוכנית עסקית ממוקדת לחצי שנה הקרובה", icon: <FileText className={styles.contentIcon} /> },
        { text: "הדרכת צילום בקליניקה (תוכן פרימיום בונוס!!)", icon: <Camera className={styles.contentIcon} /> },
        { text: "חזרה על מיינדסט מנצח לעסק", icon: <Trophy className={styles.contentIcon} /> },
        { text: "סיכום וצעדים ברורים להמשך", icon: <CheckCircle className={styles.contentIcon} /> },
        { text: "הענקת תעודות סיום מקצועיות", icon: <Award className={styles.contentIcon} /> },
        { text: "כניסה לקבוצות וואטסאפ לליווי מתמשך", icon: <PhoneCall className={styles.contentIcon} /> }
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>
         וככה זה הולך לעבוד
          </h1>
              <h1 className={styles.subtitle}>
            הדרך שלך לקליניקה רווחית נראית ככה:
          </h1>
          <div className={styles.courseInfo}>
            <div className={styles.infoCard}>
              <Calendar className={styles.infoIcon} />
              <span className={styles.infoText}>3 ימי לימוד</span>
            </div>
            
            <div className={styles.infoCard}>
              <Clock className={styles.infoIcon} />
              <span className={styles.infoText}>4-5 שעות ביום</span>
            </div>
            
            <div className={styles.infoCard}>
              <Users className={styles.infoIcon} />
              <span className={styles.infoText}>עד 4 תלמידות בקבוצה</span>
            </div>

            <div className={styles.infoCard}>
              <Map className={styles.infoIcon} />
              <span className={styles.infoText}>מעלה אדומים</span>
            </div>
          </div>
          
          <div className={styles.expandButtonContainer}>
            <button 
              className={styles.expandButton} 
              onClick={toggleExpanded}
              aria-label={isExpanded ? "הסתר מפגשים" : "הצג מפגשים"}
            >
              {isExpanded ? (
                <>
                  <Minus className={styles.expandIcon} />
                  <span>לחצי כאן להסתרת הסילבוס</span>
                </>
              ) : (
                <>
                  <Plus className={styles.expandIcon} />
                  <span>לחצי כאן לצפייה בסילבוס המלא</span>
                </>
              )}
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className={styles.sessionsContainer}>
            {sessions.map((session) => (
              <div 
                key={session.number} 
                className={`${styles.sessionCard} ${styles[`session${session.number.toString().padStart(2, '0')}`]}`}
              >
                <div className={styles.sessionHeader}>
                  <div className={styles.sessionNumber}>
                    {session.number.toString().padStart(2, '0')}
                  </div>
                  
                  <div className={styles.sessionTitleContainer}>
                    <h3 className={styles.sessionTitle}>
                      {session.title}
                    </h3>
                    <div className={styles.sessionDuration}>
                      <Clock className={styles.durationIcon} />
                      <span>{session.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.contentContainer}>
                  {session.content.map((item, index) => (
                    <div key={index} className={styles.contentItem}>
                      <div className={styles.contentIconWrapper}>
                        {item.icon}
                      </div>
                      <span className={styles.contentText}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
           
            {/* כפתור הרשמה אחרי היום האחרון */}
            <div className={styles.registrationButtonContainer}>
              <button 
                className={styles.registrationButton} 
                onClick={scrollToForm}
                aria-label="עבור לטופס הרשמה"
              >
                <span className={styles.registrationText}>עידית, קחי אותי להרשמה!</span>
                <div className={styles.registrationIconWrapper}>
                  <ArrowDown className={styles.registrationIcon} />
                </div>
              </button>
            </div>
             
          </div>
        )}


      </div>
      
    </div>
  );
};

export default ClinicManagementSyllabus;