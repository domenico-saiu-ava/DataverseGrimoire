---
logical: "msdyn_salescopilotinsight"
display: "Sales Copilot Insight"
entitySetName: "msdyn_salescopilotinsights"
primaryId: "msdyn_salescopilotinsightid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sales Copilot Insight

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salescopilotinsight` |
| Display name | Sales Copilot Insight |
| Display (plural) | Sales Copilot Insights |
| Schema name | `msdyn_salescopilotinsight` |
| Entity set (Web API) | `msdyn_salescopilotinsights` |
| Primary id attribute | `msdyn_salescopilotinsightid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salescopilotinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salescopilotinsights(<guid>)
POST /api/data/v9.2/msdyn_salescopilotinsights
PATCH /api/data/v9.2/msdyn_salescopilotinsights(<guid>)
DELETE /api/data/v9.2/msdyn_salescopilotinsights(<guid>)
```

## Attributes

Writable: **17** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_activityid`, `msdyn_activityidIdType`, `msdyn_ctatype`, `msdyn_duedate`, `msdyn_insighttext`, `msdyn_name`, `msdyn_salescopilotinsightId`, `msdyn_targetentityid`, `msdyn_targetentityidIdType`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salescopilotinsight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salescopilotinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salescopilotinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salescopilotinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salescopilotinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_salescopilotinsight_account_msdyn_targetentityid` | [account](account.md) | `msdyn_targetentityid` | `msdyn_targetentityid_account` |
| `msdyn_msdyn_salescopilotinsight_appointment_msdyn_activityid` | [appointment](appointment.md) | `msdyn_activityid` | `msdyn_activityid_appointment` |
| `msdyn_msdyn_salescopilotinsight_contact_msdyn_targetentityid` | [contact](contact.md) | `msdyn_targetentityid` | `msdyn_targetentityid_contact` |
| `msdyn_msdyn_salescopilotinsight_email_msdyn_activityid` | [email](email.md) | `msdyn_activityid` | `msdyn_activityid_email` |
| `msdyn_msdyn_salescopilotinsight_lead_msdyn_targetentityid` | [lead](lead.md) | `msdyn_targetentityid` | `msdyn_targetentityid_lead` |
| `msdyn_msdyn_salescopilotinsight_opportunity_msdyn_targetentityid` | [opportunity](opportunity.md) | `msdyn_targetentityid` | `msdyn_targetentityid_opportunity` |
| `msdyn_msdyn_salescopilotinsight_phonecall_msdyn_activityid` | [phonecall](phonecall.md) | `msdyn_activityid` | `msdyn_activityid_phonecall` |
| `msdyn_msdyn_salescopilotinsight_task_msdyn_activityid` | [task](task.md) | `msdyn_activityid` | `msdyn_activityid_task` |
| `owner_msdyn_salescopilotinsight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salescopilotinsight` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salescopilotinsight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescopilotinsight_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotinsight_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotinsight_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salescopilotinsight_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salescopilotinsight_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotinsight_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salescopilotinsight_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotinsight_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salescopilotinsight.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salescopilotinsight.md) on 2026-05-06.