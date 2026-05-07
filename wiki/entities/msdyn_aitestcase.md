---
logical: "msdyn_aitestcase"
display: "AI Test Case"
entitySetName: "msdyn_aitestcases"
primaryId: "msdyn_aitestcaseid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# AI Test Case

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aitestcase` |
| Display name | AI Test Case |
| Display (plural) | AI Test Case |
| Schema name | `msdyn_AITestCase` |
| Entity set (Web API) | `msdyn_aitestcases` |
| Primary id attribute | `msdyn_aitestcaseid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aitestcases?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aitestcases(<guid>)
POST /api/data/v9.2/msdyn_aitestcases
PATCH /api/data/v9.2/msdyn_aitestcases(<guid>)
DELETE /api/data/v9.2/msdyn_aitestcases(<guid>)
```

## Attributes

Writable: **17** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_AIObjectId`, `msdyn_AIObjectType`, `msdyn_AITestCaseId`, `msdyn_Description`, `msdyn_ExpectedOutput`, `msdyn_Name`, `msdyn_Source`, `msdyn_TestCaseState`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aitestcase` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aitestcase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aitestcase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aitestcase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aitestcase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_aitestcase` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aitestcase` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aitestcase` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aitestcase_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestcase_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestcase_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestcase_msdyn_aitestcaseinput` | _n/a_ | `msdyn_aitestcaseid` | _n/a_ |
| `msdyn_aitestcase_msdyn_aitestrun` | _n/a_ | `msdyn_aitestcaseid` | _n/a_ |
| `msdyn_aitestcase_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aitestcase_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestcase_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aitestcase.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aitestcase.md) on 2026-05-06.