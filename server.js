


// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors()); // Autoriser les requêtes cross-origin
// app.use(bodyParser.json()); // Analyser les requêtes JSON
// app.use(bodyParser.urlencoded({ extended: true })); // Analyser les données de formulaire

// // Configuration de Nodemailer
// const transporter = nodemailer.createTransport({
//     service: 'gmail', // Utiliser Gmail comme service
//     auth: {
//         user: 'yvanachiepo@icloud.com', // Remplacez par votre adresse e-mail
//         pass: 'hely okrq ieqp qqtw' // Remplacez par votre mot de passe
//     }
// });

// // Route pour gérer la soumission du formulaire
// app.post('/submit-form', (req, res) => {
//     const { name, email, message: userMessage } = req.body;

//     // Vérifier que tous les champs sont remplis
//     if (!name || !email || !userMessage) {
//         return res.status(400).json({ success: false, message: 'Tous les champs sont obligatoires.' });
//     }

//     // Configurer l'e-mail à envoyer
//     const mailOptions = {
//         from: 'votre_email@gmail.com', // Expéditeur
//         to: 'yvanachiepo@icloud.com', // Destinataire (vous-même)
//         subject: 'Nouveau message depuis votre portfolio', // Sujet de l'e-mail
//         text: `Nom: ${name}\nEmail: ${email}\nMessage: ${userMessage}` // Corps de l'e-mail
//     };

//     // Envoyer l'e-mail
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
//             return res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi du message.' });
//         } else {
//             console.log('E-mail envoyé :', info.response);
//             return res.status(200).json({ success: true, message: 'Message envoyé avec succès !' });
//         }
//     });
// });

// // Démarrer le serveur
// app.listen(PORT, () => {
//     console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
// });
