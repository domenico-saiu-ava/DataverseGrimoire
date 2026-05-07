---
logical: "msdyn_aitestcaseinput"
display: "AI Test Case Input"
entitySetName: "msdyn_aitestcaseinputs"
primaryId: "msdyn_aitestcaseinputid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# AI Test Case Input

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aitestcaseinput` |
| Display name | AI Test Case Input |
| Display (plural) | AI Test Case Input |
| Schema name | `msdyn_AITestCaseInput` |
| Entity set (Web API) | `msdyn_aitestcaseinputs` |
| Primary id attribute | `msdyn_aitestcaseinputid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aitestcaseinputs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aitestcaseinputs(<guid>)
POST /api/data/v9.2/msdyn_aitestcaseinputs
PATCH /api/data/v9.2/msdyn_aitestcaseinputs(<guid>)
DELETE /api/data/v9.2/msdyn_aitestcaseinputs(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_AITestCaseId`, `msdyn_AITestCaseInputId`, `msdyn_Description`, `msdyn_InputData`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aitestcaseinput` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aitestcaseinput_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aitestcaseinput_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aitestcaseinput_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aitestcaseinput_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_aitestcase_msdyn_aitestcaseinput` | [msdyn_aitestcase](msdyn_aitestcase.md) | `msdyn_aitestcaseid` | `msdyn_AITestCaseId` |
| `owner_msdyn_aitestcaseinput` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aitestcaseinput` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aitestcaseinput` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aitestcaseinput_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestcaseinput_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestcaseinput_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestcaseinput_msdyn_aitestcasedocument` | _n/a_ | `msdyn_aitestcaseinputid` | _n/a_ |
| `msdyn_aitestcaseinput_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aitestcaseinput_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestcaseinput_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aitestcaseinput.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aitestcaseinput.md) on 2026-05-06.