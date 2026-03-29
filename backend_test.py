#!/usr/bin/env python3
"""
Backend API Testing for Contact Form
Tests the contact form API endpoints with various scenarios
"""

import requests
import json
import sys
from datetime import datetime

# Use the production URL from frontend/.env
BASE_URL = "https://tech-innovator-47.preview.emergentagent.com/api"

def test_contact_api():
    """Test the contact form API with various scenarios"""
    
    print("=" * 60)
    print("TESTING CONTACT FORM API")
    print("=" * 60)
    print(f"Base URL: {BASE_URL}")
    print()
    
    # Test results tracking
    results = {
        "valid_submission": False,
        "validation_errors": {},
        "message_retrieval": False,
        "response_structure": False
    }
    
    # Test 1: Valid submission
    print("TEST 1: Valid Contact Form Submission")
    print("-" * 40)
    
    valid_data = {
        "name": "Adriel Test",
        "email": "test@example.com", 
        "message": "Ceci est un message de test pour le formulaire de contact."
    }
    
    try:
        response = requests.post(f"{BASE_URL}/contact", json=valid_data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") == True and "message" in data:
                results["valid_submission"] = True
                results["response_structure"] = True
                print("✅ Valid submission test PASSED")
            else:
                print("❌ Valid submission test FAILED - Invalid response structure")
        else:
            print(f"❌ Valid submission test FAILED - Status code: {response.status_code}")
            
    except Exception as e:
        print(f"❌ Valid submission test FAILED - Error: {str(e)}")
    
    print()
    
    # Test 2: Validation Errors
    print("TEST 2: Validation Error Tests")
    print("-" * 40)
    
    validation_tests = [
        {
            "name": "Empty name",
            "data": {"name": "", "email": "test@example.com", "message": "This is a test message for validation."},
            "expected_error": True
        },
        {
            "name": "Short name (< 2 chars)",
            "data": {"name": "A", "email": "test@example.com", "message": "This is a test message for validation."},
            "expected_error": True
        },
        {
            "name": "Invalid email format",
            "data": {"name": "Test User", "email": "invalid-email", "message": "This is a test message for validation."},
            "expected_error": True
        },
        {
            "name": "Short message (< 10 chars)",
            "data": {"name": "Test User", "email": "test@example.com", "message": "Short"},
            "expected_error": True
        }
    ]
    
    for test in validation_tests:
        print(f"Testing: {test['name']}")
        try:
            response = requests.post(f"{BASE_URL}/contact", json=test["data"], timeout=10)
            print(f"  Status Code: {response.status_code}")
            
            if test["expected_error"]:
                if response.status_code in [400, 422]:  # FastAPI returns 422 for validation errors
                    results["validation_errors"][test["name"]] = True
                    print(f"  ✅ {test['name']} validation PASSED")
                else:
                    results["validation_errors"][test["name"]] = False
                    print(f"  ❌ {test['name']} validation FAILED - Expected 400/422, got {response.status_code}")
            
        except Exception as e:
            results["validation_errors"][test["name"]] = False
            print(f"  ❌ {test['name']} validation FAILED - Error: {str(e)}")
        
        print()
    
    # Test 3: Message Retrieval
    print("TEST 3: Message Retrieval (GET /api/contact/messages)")
    print("-" * 40)
    
    try:
        response = requests.get(f"{BASE_URL}/contact/messages", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            messages = response.json()
            print(f"Retrieved {len(messages)} messages")
            
            # Check if our test message is there
            test_message_found = False
            for msg in messages:
                if msg.get("name") == "Adriel Test" and msg.get("email") == "test@example.com":
                    test_message_found = True
                    print("✅ Test message found in database")
                    print(f"  Message ID: {msg.get('id')}")
                    print(f"  Timestamp: {msg.get('timestamp')}")
                    print(f"  Status: {msg.get('status')}")
                    break
            
            if test_message_found:
                results["message_retrieval"] = True
            else:
                print("❌ Test message not found in database")
                
        else:
            print(f"❌ Message retrieval FAILED - Status code: {response.status_code}")
            print(f"Response: {response.text}")
            
    except Exception as e:
        print(f"❌ Message retrieval FAILED - Error: {str(e)}")
    
    print()
    
    # Test Summary
    print("=" * 60)
    print("TEST SUMMARY")
    print("=" * 60)
    
    total_tests = 0
    passed_tests = 0
    
    # Valid submission
    total_tests += 1
    if results["valid_submission"]:
        passed_tests += 1
        print("✅ Valid submission test: PASSED")
    else:
        print("❌ Valid submission test: FAILED")
    
    # Response structure
    total_tests += 1
    if results["response_structure"]:
        passed_tests += 1
        print("✅ Response structure test: PASSED")
    else:
        print("❌ Response structure test: FAILED")
    
    # Validation tests
    for test_name, passed in results["validation_errors"].items():
        total_tests += 1
        if passed:
            passed_tests += 1
            print(f"✅ {test_name} validation: PASSED")
        else:
            print(f"❌ {test_name} validation: FAILED")
    
    # Message retrieval
    total_tests += 1
    if results["message_retrieval"]:
        passed_tests += 1
        print("✅ Message retrieval test: PASSED")
    else:
        print("❌ Message retrieval test: FAILED")
    
    print()
    print(f"OVERALL RESULT: {passed_tests}/{total_tests} tests passed")
    
    if passed_tests == total_tests:
        print("🎉 ALL TESTS PASSED - Contact API is working correctly!")
        return True
    else:
        print("⚠️  SOME TESTS FAILED - Contact API needs attention")
        return False

def test_basic_connectivity():
    """Test basic API connectivity"""
    print("Testing basic API connectivity...")
    
    try:
        response = requests.get(f"{BASE_URL}/", timeout=10)
        print(f"Root endpoint status: {response.status_code}")
        if response.status_code == 200:
            print("✅ Basic connectivity: OK")
            return True
        else:
            print("❌ Basic connectivity: FAILED")
            return False
    except Exception as e:
        print(f"❌ Basic connectivity: FAILED - {str(e)}")
        return False

if __name__ == "__main__":
    print("Starting Backend API Tests...")
    print(f"Timestamp: {datetime.now()}")
    print()
    
    # Test basic connectivity first
    if not test_basic_connectivity():
        print("Cannot proceed with tests - basic connectivity failed")
        sys.exit(1)
    
    print()
    
    # Run contact API tests
    success = test_contact_api()
    
    if success:
        sys.exit(0)
    else:
        sys.exit(1)