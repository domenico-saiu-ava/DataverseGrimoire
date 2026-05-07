---
logical: "msdyn_stakeholderresearchoutput"
display: "Stakeholder Research Output"
entitySetName: "msdyn_stakeholderresearchoutputs"
primaryId: "msdyn_stakeholderresearchoutputid"
primaryName: "msdyn_stakeholderresearchoutput"
tableType: "Standard"
ownership: "UserOwned"
---

# Stakeholder Research Output

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_stakeholderresearchoutput` |
| Display name | Stakeholder Research Output |
| Display (plural) | Stakeholder Research Outputs |
| Schema name | `msdyn_StakeholderResearchOutput` |
| Entity set (Web API) | `msdyn_stakeholderresearchoutputs` |
| Primary id attribute | `msdyn_stakeholderresearchoutputid` |
| Primary name attribute | `msdyn_stakeholderresearchoutput` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_stakeholderresearchoutputs?$select=msdyn_stakeholderresearchoutput&$top=10
GET /api/data/v9.2/msdyn_stakeholderresearchoutputs(<guid>)
POST /api/data/v9.2/msdyn_stakeholderresearchoutputs
PATCH /api/data/v9.2/msdyn_stakeholderresearchoutputs(<guid>)
DELETE /api/data/v9.2/msdyn_stakeholderresearchoutputs(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Account`, `msdyn_MCSTopStakeholderSummary`, `msdyn_StakeholderResearchOutput`, `msdyn_StakeholderResearchOutputId`, `msdyn_Top20stakeholderInfo`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_stakeholderresearchoutput` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_stakeholderresearchoutput_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_stakeholderresearchoutput_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_stakeholderresearchoutput_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_stakeholderresearchoutput_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_stakeholderresearchoutput_Account_account` | [account](account.md) | `msdyn_account` | `msdyn_Account` |
| `owner_msdyn_stakeholderresearchoutput` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_stakeholderresearchoutput` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_stakeholderresearchoutput` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_stakeholderresearchoutput_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_stakeholderresearchoutput_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_stakeholderresearchoutput_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_stakeholderresearchoutput_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_stakeholderresearchoutput_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_stakeholderresearchoutput_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_stakeholderresearchoutput.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_stakeholderresearchoutput.md) on 2026-05-06.