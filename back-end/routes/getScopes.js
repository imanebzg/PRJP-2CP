
const express = require('express');
const router = express.Router();
const connection = require('../config/database');


router.get('/getScope1', async (req, res) => {
    try {
    const {sector1} = req.query;
    if (!sector1) return res.status(200).json({ scope1: 0 });
  
      let tableName;
      switch (sector1) {
        case 'Combustibles':
          tableName = 'combustibles';
          break;
        case 'Process et émissions fugitives':
          tableName = 'process_emissions_fugitives';
          break;
        case 'UTCF':
          tableName = 'utcf';
          break;
        case 'Electricité':
          tableName = 'electricite';
          break;
        case 'Achats de biens':
          tableName = 'achats_biens';
          break;
        case 'Achats de services':
          tableName = 'achats_services';
          break;
        case 'Transport de marchandises':
          tableName = 'transport_marchandises';
          break;
        case 'Transport de personnes':
          tableName = 'transport_personnes';
          break;
        case 'Traitement des déchets':
          tableName = 'traitement_dechets';
          break;
        default:
          return res.status(400).json({ error: 'Invalid sector1 value' });
      }
  
      if (!tableName) {
        return res.status(400).json({ error: 'Invalid sector1 value' });
      }

      const query = `SELECT * FROM ${tableName} WHERE TRIM(\`scope\`) = ?;`;
      const scope = 'scope 1';
      connection.query(query, [scope], (err, results) => {
        if (err) {
          console.error(`Error retrieving user data from ${tableName} table:`, err);
          return res.status(500).json({ error: `Error retrieving user data from ${tableName} table` });
        }
        const scope1 = results.length;
        const response = scope1 === 0
          ? { message: 'Empty', scope1: 0 }
          : { scope1 };
  
        return res.status(200).json(response);
      });
    } catch (err) {
      console.error('Error getting scope 1 percentage:', err);
      return res.status(500).json({ error: 'Error getting scope 1 percentage' });
    }
  });


  router.get('/getScope2', async (req, res) => {
    try {
    const {sector1} = req.query;
    if (!sector1) return res.status(200).json({scope2: 0});
      let tableName;
      switch (sector1) {
        case 'Combustibles':
          tableName = 'combustibles';
          break;
        case 'Process et émissions fugitives':
          tableName = 'process_emissions_fugitives';
          break;
        case 'UTCF':
          tableName = 'utcf';
          break;
        case 'Electricité':
          tableName = 'electricite';
          break;
        case 'Achats de biens':
          tableName = 'achats_biens';
          break;
        case 'Achats de services':
          tableName = 'achats_services';
          break;
        case 'Transport de marchandises':
          tableName = 'transport_marchandises';
          break;
        case 'Transport de personnes':
          tableName = 'transport_personnes';
          break;
        case 'Traitement des déchets':
          tableName = 'traitement_dechets';
          break;
        default:
          return res.status(400).json({ error: 'Invalid sector1 value' });
      }
  
      if (!tableName) {
        return res.status(400).json({ error: 'Invalid sector1 value' });
      }
      const query = `SELECT * FROM ${tableName} WHERE TRIM(\`scope\`) = ?;`;
      const scope = 'scope 2';
      connection.query(query, [scope], (err, results) => {
        if (err) {
          console.error(`Error retrieving user data from ${tableName} table:`, err);
          return res.status(500).json({ error: `Error retrieving user data from ${tableName} table` });
        }
        const scope2 = results.length;
        const response = scope2 === 0
          ? { message: 'Empty', scope2: 0 }
          : { scope2 };
  
        return res.status(200).json(response);
      });
    } catch (err) {
      console.error('Error getting scope 2 percentage:', err);
      return res.status(500).json({ error: 'Error getting scope 2 percentage' });
    }
  });
  router.get('/getScope3', async (req, res) => {
    try {
    const {sector1} = req.query;
    if (!sector1) return res.status(200).json({scope3 : 0});
      let tableName;
      switch (sector1) {
        case 'Combustibles':
          tableName = 'combustibles';
          break;
        case 'Process et émissions fugitives':
          tableName = 'process_emissions_fugitives';
          break;
        case 'UTCF':
          tableName = 'utcf';
          break;
        case 'Electricité':
          tableName = 'electricite';
          break;
        case 'Achats de biens':
          tableName = 'achats_biens';
          break;
        case 'Achats de services':
          tableName = 'achats_services';
          break;
        case 'Transport de marchandises':
          tableName = 'transport_marchandises';
          break;
        case 'Transport de personnes':
          tableName = 'transport_personnes';
          break;
        case 'Traitement des déchets':
          tableName = 'traitement_dechets';
          break;
        default:
          return res.status(400).json({ error: 'Invalid sector1 value' });
      }
  
      if (!tableName) {
        return res.status(400).json({ error: 'Invalid sector1 value' });
      }
      const query = `SELECT * FROM ${tableName} WHERE TRIM(\`scope\`) = ?;`;
      const scope = 'scope 3';
      connection.query(query, [scope], (err, results) => {
        if (err) {
          console.error(`Error retrieving user data from ${tableName} table:`, err);
          return res.status(500).json({ error: `Error retrieving user data from ${tableName} table` });
        }
        const scope3 = results.length;
        const response = scope3 === 0
          ? { message: 'Empty', scope3: 0 }
          : { scope3 };
  
        return res.status(200).json(response);
      });
    } catch (err) {
      console.error('Error getting scope 3 percentage:', err);
      return res.status(500).json({ error: 'Error getting scope 3 percentage' });
    }
  });




module.exports = router;