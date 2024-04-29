
const express = require('express');
const router = express.Router();

const {getSecteur5,getSecteur4,getSecteur3, getSecteurs, getProducts , getPostes ,getLignes ,getUnit ,getNomAttribut, getNomFrontiere ,getContributeur ,getLocalisation,getSousLocalisation} = require('../utils/dbFunctions');

router.get('/getSector2Options', async (req, res) => {
    try {
      const {sector1} = req.query;
      const sector2Options = await getSecteurs(sector1);
      res.json(sector2Options);
    } catch (err) {
      console.error('Error getting sector 2 options:', err);
      res.status(500).json({ error: 'An error occurred while getting sector 2 options' });
    }
  });
  

router.get('/getSector3Options', async (req, res) => {

    try {
      const {sector1, sector2} = req.query;
      const sector3Options = await getSecteur3(sector1, sector2);
      res.json(sector3Options);
    } catch (err) {
      console.error('Error getting sector 3 options:', err);
      res.status(500).json({ error: 'An error occurred while getting sector 3 options' });
    }
  });
  

router.get('/getSector4Options', async (req, res) => {
    try {
      const {sector1, sector2, sector3} = req.query;
      const sector4Options = await getSecteur4(sector1, sector2, sector3);
      res.json(sector4Options);
    } catch (err) {
      console.error('Error getting sector 4 options:', err);
      res.status(500).json({ error: 'An error occurred while getting sector 4 options' });
    }
  });
  

router.get('/getSector5Options', async (req, res) => {
    try {
      const {sector1, sector2, sector3, sector4} = req.query;
      const sector5Options = await getSecteur5(sector1, sector2, sector3, sector4);
      res.json(sector5Options);
    } catch (err) {
      console.error('Error getting sector 5 options:', err);
      res.status(500).json({ error: 'An error occurred while getting sector 5 options' });
    }
  });
  
  
  router.get('/getProductOptions', async (req, res) => {
    try {
        const {sector1, sector2, sector3, sector4,sector5} = req.query;
        const productOptions = await getProducts(sector1, sector2, sector3, sector4,sector5);
        res.json(productOptions);
    } catch (err) {
        console.error('Error getting product options:', err);
        res.status(500).json({ error: 'An error occurred while getting product options' });
    }
  });


  router.get('/getposteoptions', async (req, res) => {
    try {
      const { nom, typeLigne } = req.query; 
      const posteOptions = await getPostes(nom, typeLigne) ;
      res.json(posteOptions);
    } catch (err) {
      console.error('Error getting poste options:', err);
      res.status(500).json({ error: 'An error occurred while getting poste options' });
    }
  });


  router.get('/getligneoptions', async (req, res) => {
    try {
      const {nom} = req.query; 
      const ligneOptions = await getLignes(nom) ;
      res.json(ligneOptions);
    } catch (err) {
      console.error('Error getting ligne options:', err);
      res.status(500).json({ error: 'An error occurred while getting ligne options' });
    }
  });


  router.get('/getunitoptions', async (req, res) => {
    try {
      const {nom} = req.query; 
      const unitOptions = await     getUnit(nom, res); 
      res.json(unitOptions);
    } catch (err) {
      console.error('Error getting unit options:', err);
      res.status(500).json({ error: 'An error occurred while getting unit options' });
    }
  });

  router.get('/getnomattributoptions', async (req, res) => {
    try {
      const {nom} = req.query; 
      const NomAttributOptions = await   getNomAttribut(nom, res); 
      res.json(NomAttributOptions);
    } catch (err) {
      console.error('Error getting nom attribut options:', err);
      res.status(500).json({ error: 'An error occurred while getting nom attribut options' });
    }
  });

  router.get('/getnomfrontiereoptions', async (req, res) => {
    try {
      const {nom,NomAttribut} = req.query; 
      const NomFrontiereOptions = await  getNomFrontiere(nom,NomAttribut, res); 
      res.json(NomFrontiereOptions);
    } catch (err) {
      console.error('Error getting nom frontiere options:', err);
      res.status(500).json({ error: 'An error occurred while getting nom frontiere options' });
    }
  });

  router.get('/getcontributeuroptions', async (req, res) => {
    try {
      const {nom,NomAttribut,NomFrontiere} = req.query; 
      const contributeurOptions = await  getContributeur(nom,NomAttribut,NomFrontiere, res); 
      res.json(contributeurOptions);
    } catch (err) {
      console.error('Error getting contributeur options:', err);
      res.status(500).json({ error: 'An error occurred while getting contributeur options' });
    }
  });

  router.get('/getlocalisationoptions', async (req, res) => {
    try {
      const {nom,NomAttribut,NomFrontiere,contributeur} = req.query; 
      const localisationOptions = await  getLocalisation(nom,NomAttribut,NomFrontiere,contributeur, res); 
      res.json(localisationOptions);
    } catch (err) {
      console.error('Error getting localisation options:', err);
      res.status(500).json({ error: 'An error occurred while getting localisation options' });
    }
  });

  router.get('/getsouslocalisationoptions', async (req, res) => {
    try {
      const {nom,NomAttribut,NomFrontiere,contributeur,localisation} = req.query; 
      const souslocalisationOptions = await  getSousLocalisation(nom,NomAttribut,NomFrontiere,contributeur,localisation, res); 
      res.json(souslocalisationOptions);
    } catch (err) {
      console.error('Error getting sous localisation options:', err);
      res.status(500).json({ error: 'An error occurred while getting sous localisation options' });
    }
  });

module.exports = router;
