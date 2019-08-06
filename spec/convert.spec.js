describe('Test des parametres de la fonction', function() {
	
	it('la fonction doit prendre 3 parametres', function() {
        expect(convertisseur('USD')).toBe(null);
        expect(convertisseur('USD',2)).toBe(null);
		expect(convertisseur('USD', 2, 'EUR')).not.toBe(null);
    });
    
    it('les 3 parametres doivent etre du bon type', function() {
	expect(convertisseur(2, 2, 'EUR')).toBe(null);
        expect(convertisseur(null, 2, 'EUR')).toBe(null);
        expect(convertisseur('a', 2, 'EUR')).toBe(null);
        expect(convertisseur('NZD','USD', 'EUR')).toBe(null);
        expect(convertisseur('NZD','p','EUR')).toBe(null);
        expect(convertisseur('NZD',null, 'EUR')).toBe(null);
        expect(convertisseur('USD', 2, 3)).toBe(null);
        expect(convertisseur('USD', 2, 'l')).toBe(null);
        expect(convertisseur('USD', 2, null)).toBe(null);
        expect(convertisseur('NZD', 2, 'EUR')).not.toBe(null);
    });

});

describe('Test resultats de la fonction', function() {
	
	it('doit convertir des USD dans les autres monnaies', function(){
        expect(convertisseur('USD', 2, 'EUR')).toEqual(1.68);
        expect(convertisseur('USD', 2, 'NZD')).toEqual(2.90);
        expect(convertisseur('USD', 2, 'KRW')).toEqual(2172);
        expect(convertisseur('USD', 2, 'EUR')).not.toEqual(2/6);
    });
        
    
    it('doit convertir des EUR dans les autres monnaies', function() {
        expect(convertisseur('EUR', 1.68, 'USD')).toEqual(1.68/0.84);
        expect(convertisseur('EUR', 1.68, 'NZD')).toEqual(1.68*1.45/0.84);
        expect(convertisseur('EUR', 1.68, 'KRW')).toEqual(1.68*1086/0.84);
        expect(convertisseur('EUR', 1.68, 'USD')).not.toEqual(1.68/6);
        
    });

    it('doit convertir des KRW dans les autres monnaies', function() {
        expect(convertisseur('KRW', 2172, 'USD')).toEqual(2172*1/1086);
        expect(convertisseur('KRW', 2172, 'NZD')).toEqual(2172*1.45/1086);
        expect(convertisseur('KRW', 2172, 'EUR')).toEqual(2172*0.84/1086);
        expect(convertisseur('KRW', 2172, 'USD')).not.toEqual(2172/6);
        
    });

    it('doit convertir des NZD dans les autres monnaies', function() {
        expect(convertisseur('NZD', 2.90, 'USD')).toEqual(2.90*1/1.45);
        expect(convertisseur('NZD', 2.90, 'KRW')).toEqual(2.90*1086/1.45);
        expect(convertisseur('NZD', 2.90, 'EUR')).toEqual(2.90*0.84/1.45);
        expect(convertisseur('NZD', 2.90, 'USD')).not.toEqual(2.90/6);
        
    });

    it('ne doit pas convertir des mauvais montants', function() {
		expect(convertisseur('NZD', -2.90, 'USD')).toBe(null);
        expect(convertisseur('NZD', 0, 'USD')).toBe(null);
    });

});
