describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {
            it('should return vowels in non-palindrome word', function () {
                expect(app.generateMessage('kwiatek')).toEqual({vowel: 3, palindrome: false});
            });
            it('should count all vowels in palindrome', function () {
                expect(app.generateMessage('zwierzak')).toEqual({vowel: 3, palindrome: true});
            });
            it('should thrown an error message', function () {
                expect(function () {
                    app.generateMessage('')
                }).toThrowError('Empty string!');
            });
    });

     describe('isPalindrome', function () {

            describe('toHaveBeenCalled', function () {
                beforeAll(function () {
                    spyOn(app, 'isPalindrome');
                    app.isPalindrome('ala');
                });
                it('should call isPalindrome function', function () {
                    expect(app.isPalindrome).toHaveBeenCalled();
                });
            });

            describe('and.callThrough', function () {
                beforeAll(function () {
                    spyOn(app, 'isPalindrome').and.callThrough();
                    app.generateMessage('ala');
                });
                it('should call isPalindrome and vowelCount functions when generateMessage function is called', function () {
                    expect(app.isPalindrome).toHaveBeenCalled();
                    expect(app.isPalindrome).toHaveBeenCalledWith('ala');
                });
            });

            describe('and.returnValue', function () {
                var returns;
                beforeAll(function () {
                    spyOn(app, 'isPalindrome').and.returnValue(true);
                });
                it('should call generateMessage and return value {2, true}', function () {
                    returns = app.generateMessage('zaraz');
                    expect(returns).toEqual({vowel: 2, palindrome: true});
                });
                it('should call isPalindrome and vowelCount should return true and 2', function () {
                    returns = app.isPalindrome('ala');
                    expect(returns).toEqual(true);
                });
            });

            describe('and.callFake', function () {
                beforeAll(function () {
                    spyOn(app, 'isPalindrome').and.callFake(function () {
                        return 'FAKE isPalindrome FUNCTION'
                    });
                });
                it('should call isPalindrome fake function', function () {
                    expect(app.isPalindrome('lalalakkk')).toEqual('FAKE isPalindrome FUNCTION');
                });
                it('should notice isPalindrome called second time when generateMessage called', function () {
                    expect(app.generateMessage('ala')).toEqual({vowel: 2, palindrome: 'FAKE isPalindrome FUNCTION'});
                });
            });

            describe('calls.count()', function () {
                var returns;
                beforeAll(function () {
                    spyOn(app, 'isPalindrome').and.callThrough();
                });
                it('should call isPalindrome function', function () {
                    returns = app.isPalindrome('ala');
                    expect(app.isPalindrome.calls.count()).toBe(1);
                });
                it('should notice isPalindrome called second time when generateMessage called', function () {
                    returns = app.generateMessage('ala');
                    expect(app.isPalindrome.calls.count()).toBe(2);
                });
            });
        });

        describe('vowelCount', function () {

            describe('toHaveBeenCalled', function () {
                beforeAll(function () {
                    spyOn(app, 'vowelCount');
                    app.vowelCount('ala');
                });
                it('should call vowelCount function', function () {
                    expect(app.vowelCount).toHaveBeenCalled();
                });
            });

            describe('and.callThrough', function () {
                beforeAll(function () {
                    spyOn(app, 'vowelCount').and.callThrough();
                    app.generateMessage('kajak');
                });
                it('should call vowelCount and vowelCount functions when generateMessage function is called', function () {
                    expect(app.vowelCount).toHaveBeenCalled();
                    expect(app.vowelCount).toHaveBeenCalledWith('kajak');
                });
            });

            describe('and.returnValue', function () {
                var returns;
                beforeAll(function () {
                    spyOn(app, 'vowelCount').and.returnValue(2);
                });
                it('should call generateMessage and return value {2, true}', function () {
                    returns = app.generateMessage('ala');
                    expect(returns).toEqual({vowel: 2, palindrome: true});
                });
                it('should call vowelCount and should return 2', function () {
                    returns = app.vowelCount('ala');
                    expect(returns).toEqual(2);
                });
            });

            describe('and.callFake', function () {
                 beforeAll(function() {
                      spyOn(app, 'vowelCount').and.callFake(function (str) {
                            return 'cos';
                      });
                 });
                 it('should call vowelCount fake', function() {
                       expect(app.vowelCount('program')).toEqual('cos');
                 });
                 it('should call generateMessage and isPalindrome fake ', function() {
                       expect(app.generateMessage('ala')).toEqual({vowel: 'cos', palindrome: true})
                 });
            });

            describe('calls.count()', function () {
                var returns;
                beforeAll(function () {
                    spyOn(app, 'vowelCount').and.callThrough();
                });
                it('should call vowelCount function', function () {
                    returns = app.vowelCount('ala');
                    expect(app.vowelCount.calls.count()).toBe(1);
                });
                it('should notice vowelCount called second time when generateMessage called', function () {
                    returns = app.generateMessage('ala');
                    expect(app.vowelCount.calls.count()).toBe(2);
                });
                it('should notice vowelCount called third time when generateMessage is called second time', function () {
                    returns = app.generateMessage('zieas');
                    expect(app.vowelCount.calls.count()).toBe(3);
                });

            });
        });
    });

