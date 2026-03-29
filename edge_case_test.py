#!/usr/bin/env python3
"""
Additional Edge Case Tests for Contact Form API
"""

import requests
import json

BASE_URL = "https://tech-innovator-47.preview.emergentagent.com/api"

def test_edge_cases():
    """Test edge cases and boundary conditions"""
    
    print("=" * 60)
    print("TESTING EDGE CASES")
    print("=" * 60)
    
    edge_tests = [
        {
            "name": "Name exactly 2 characters (boundary)",
            "data": {"name": "AB", "email": "test@example.com", "message": "This is a test message for boundary testing."},
            "should_pass": True
        },
        {
            "name": "Name exactly 100 characters (boundary)",
            "data": {"name": "A" * 100, "email": "test@example.com", "message": "This is a test message for boundary testing."},
            "should_pass": True
        },
        {
            "name": "Name 101 characters (over limit)",
            "data": {"name": "A" * 101, "email": "test@example.com", "message": "This is a test message for boundary testing."},
            "should_pass": False
        },
        {
            "name": "Message exactly 10 characters (boundary)",
            "data": {"name": "Test User", "email": "test@example.com", "message": "1234567890"},
            "should_pass": True
        },
        {
            "name": "Message exactly 1000 characters (boundary)",
            "data": {"name": "Test User", "email": "test@example.com", "message": "A" * 1000},
            "should_pass": True
        },
        {
            "name": "Message 1001 characters (over limit)",
            "data": {"name": "Test User", "email": "test@example.com", "message": "A" * 1001},
            "should_pass": False
        },
        {
            "name": "Name with whitespace only",
            "data": {"name": "   ", "email": "test@example.com", "message": "This is a test message."},
            "should_pass": False
        },
        {
            "name": "Message with whitespace only",
            "data": {"name": "Test User", "email": "test@example.com", "message": "          "},
            "should_pass": False
        }
    ]
    
    passed = 0
    total = len(edge_tests)
    
    for test in edge_tests:
        print(f"Testing: {test['name']}")
        try:
            response = requests.post(f"{BASE_URL}/contact", json=test["data"], timeout=10)
            
            if test["should_pass"]:
                if response.status_code == 200:
                    print(f"  ✅ PASSED - Status: {response.status_code}")
                    passed += 1
                else:
                    print(f"  ❌ FAILED - Expected 200, got {response.status_code}")
            else:
                if response.status_code in [400, 422]:
                    print(f"  ✅ PASSED - Correctly rejected with status: {response.status_code}")
                    passed += 1
                else:
                    print(f"  ❌ FAILED - Expected 400/422, got {response.status_code}")
                    
        except Exception as e:
            print(f"  ❌ FAILED - Error: {str(e)}")
        
        print()
    
    print(f"Edge case tests: {passed}/{total} passed")
    return passed == total

if __name__ == "__main__":
    test_edge_cases()