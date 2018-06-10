//
//  TableViewController.swift
//  Visual Recognition
//
//  Created by Nicholas Bourdakos on 3/17/17.
//  Copyright © 2017 Nicholas Bourdakos. All rights reserved.
//

import UIKit
import VisualRecognitionV3

class ResultsTableViewController: UIViewController {
    
    // MARK: - IBOutlets
    
    @IBOutlet var tableView: UITableView!
    @IBOutlet var topSeparatorView: UIView!
    @IBOutlet var bottomSeperatorView: UIView!
    @IBOutlet var headerSectionHeightConstraint: NSLayoutConstraint!
    @IBOutlet var gripperTopConstraint: NSLayoutConstraint!
    @IBOutlet var gripperView: UIView! {
        didSet {
            gripperView.layer.cornerRadius = 2.5
        }
    }
    
    // MARK: - Variable Declarations
    
    var classifications = [VisualRecognitionV3.ClassResult]()
    var drawerBottomSafeArea: CGFloat = 0.0 {
        didSet {
            self.loadViewIfNeeded()
            // Adjust the contentInset for the tableview to respect the safe area.
            tableView.contentInset = UIEdgeInsets(top: 0.0, left: 0.0, bottom: drawerBottomSafeArea, right: 0.0)
        }
    }
    
    // MARK: - Override Functions
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        
        // UIFeedbackGenerator is only available iOS 10+.
        if #available(iOS 10.0, *) {
            let feedbackGenerator = UISelectionFeedbackGenerator()
            pulleyViewController?.feedbackGenerator = feedbackGenerator
        }
    }
}

// MARK: - PulleyDrawerViewControllerDelegate

extension ResultsTableViewController: PulleyDrawerViewControllerDelegate {
    func collapsedDrawerHeight(bottomSafeArea: CGFloat) -> CGFloat {
        // For devices with a bottom safe area, we want to make our drawer taller.
        return 33.0 + bottomSafeArea
    }
    
    func partialRevealDrawerHeight(bottomSafeArea: CGFloat) -> CGFloat {
        // For devices with a bottom safe area, we want to make our drawer taller.
        return min(56.0 * CGFloat(classifications.count) + 33.0 + bottomSafeArea, 264.0 + bottomSafeArea)
    }
    
    func supportedDrawerPositions() -> [PulleyPosition] {
        // This is the same as: [.open, .partiallyRevealed, .collapsed, .closed]
        return PulleyPosition.all
    }
    
    func drawerPositionDidChange(drawer: PulleyViewController, bottomSafeArea: CGFloat) {
        // We want to know about the safe area to customize our UI.
        drawerBottomSafeArea = bottomSafeArea
        
        if drawer.drawerPosition == .collapsed {
            headerSectionHeightConstraint.constant = 33.0 + drawerBottomSafeArea
        } else {
            headerSectionHeightConstraint.constant = 33.0
        }
        
        // Handle tableview scrolling
        tableView.isScrollEnabled = drawer.drawerPosition == .open
        topSeparatorView.isHidden = false
        bottomSeperatorView.isHidden = true
    }
    
    func drawerDisplayModeDidChange(drawer: PulleyViewController) {
        gripperTopConstraint.isActive = drawer.currentDisplayMode == .bottomDrawer
    }
}

// MARK: - UITableViewDataSource

extension ResultsTableViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return classifications.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cellDefault", for: indexPath) as! ResultTableViewCell
        
        let score = classifications[indexPath.item].score ?? 0.0
        
        cell.label.text = classifications[indexPath.item].className
        cell.progress.progress = CGFloat(score)
        cell.score.text = String(format: "%.2f", score)
        
        return cell
    }
}

// MARK: - UITableViewDelegate

extension ResultsTableViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 56.0
    }
}
