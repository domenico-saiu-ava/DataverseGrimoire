---
logical: "msdyn_salesroutingrun"
display: "Sales routing run"
entitySetName: "msdyn_salesroutingruns"
primaryId: "msdyn_salesroutingrunid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sales routing run

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesroutingrun` |
| Display name | Sales routing run |
| Display (plural) | Sales routing runs |
| Schema name | `msdyn_salesroutingrun` |
| Entity set (Web API) | `msdyn_salesroutingruns` |
| Primary id attribute | `msdyn_salesroutingrunid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesroutingruns?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesroutingruns(<guid>)
POST /api/data/v9.2/msdyn_salesroutingruns
PATCH /api/data/v9.2/msdyn_salesroutingruns(<guid>)
DELETE /api/data/v9.2/msdyn_salesroutingruns(<guid>)
```

## Attributes

Writable: **27** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_assignmentruleid`, `msdyn_connectedsequenceids`, `msdyn_connectsequencestatus`, `msdyn_errormessage`, `msdyn_isrecordassigned`, `msdyn_name`, `msdyn_ownerassigned`, `msdyn_ownerassignedIdType`, `msdyn_previousowner`, `msdyn_previousownerIdType`, `msdyn_previoussegmentid`, `msdyn_routingrequestsource`, `msdyn_routingstatus`, `msdyn_salesroutingrunId`, `msdyn_saruninstanceid`, `msdyn_segmentationstatus`, `msdyn_segmentid`, `msdyn_targetobject`, `msdyn_targetobjectIdType`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (23)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salesroutingrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salesroutingrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesroutingrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesroutingrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesroutingrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_account_msdyn_salesroutingrun_targetobject` | [account](account.md) | `msdyn_targetobject` | `msdyn_targetobject_account` |
| `msdyn_contact_msdyn_salesroutingrun_targetobject` | [contact](contact.md) | `msdyn_targetobject` | `msdyn_targetobject_contact` |
| `msdyn_lead_msdyn_salesroutingrun_targetobject` | [lead](lead.md) | `msdyn_targetobject` | `msdyn_targetobject_lead` |
| `msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule` | [msdyn_assignmentrule](msdyn_assignmentrule.md) | `msdyn_assignmentruleid` | `msdyn_assignmentruleid` |
| `msdyn_msdyn_saruninstance_msdyn_salesroutingrun_saruninstanceid` | [msdyn_saruninstance](msdyn_saruninstance.md) | `msdyn_saruninstanceid` | `msdyn_saruninstanceid` |
| `msdyn_msdyn_segment_msdyn_salesroutingrun_previoussegmentid` | [msdyn_segment](msdyn_segment.md) | `msdyn_previoussegmentid` | `msdyn_previoussegmentid` |
| `msdyn_msdyn_segment_msdyn_salesroutingrun_segment` | [msdyn_segment](msdyn_segment.md) | `msdyn_segmentid` | `msdyn_segmentid` |
| `msdyn_opportunity_msdyn_salesroutingrun_targetobject` | [opportunity](opportunity.md) | `msdyn_targetobject` | `msdyn_targetobject_opportunity` |
| `msdyn_queue_msdyn_salesroutingrun_ownerassigned` | [queue](queue.md) | `msdyn_ownerassigned` | `msdyn_ownerassigned_queue` |
| `msdyn_queue_msdyn_salesroutingrun_previousowner` | [queue](queue.md) | `msdyn_previousowner` | `msdyn_previousowner_queue` |
| `msdyn_salessuggestion_msdyn_salesroutingrun_targetobject` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `msdyn_targetobject` | `msdyn_targetobject_msdyn_salessuggestion` |
| `msdyn_systemuser_msdyn_salesroutingrun_ownerassigned` | [systemuser](systemuser.md) | `msdyn_ownerassigned` | `msdyn_ownerassigned_systemuser` |
| `msdyn_systemuser_msdyn_salesroutingrun_previousowner` | [systemuser](systemuser.md) | `msdyn_previousowner` | `msdyn_previousowner_systemuser` |
| `msdyn_team_msdyn_salesroutingrun_ownerassigned` | [team](team.md) | `msdyn_ownerassigned` | `msdyn_ownerassigned_team` |
| `msdyn_team_msdyn_salesroutingrun_previousowner` | [team](team.md) | `msdyn_previousowner` | `msdyn_previousowner_team` |
| `owner_msdyn_salesroutingrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salesroutingrun` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salesroutingrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesroutingrun_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesroutingrun_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesroutingrun_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salesroutingrun_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salesroutingrun_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesroutingrun_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesroutingrun_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesroutingrun_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesroutingrun.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salesroutingrun.md) on 2026-05-06.