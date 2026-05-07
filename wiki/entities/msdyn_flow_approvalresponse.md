---
logical: "msdyn_flow_approvalresponse"
display: "Approval Response"
entitySetName: "msdyn_flow_approvalresponses"
primaryId: "msdyn_flow_approvalresponseid"
primaryName: "msdyn_flow_approvalresponse_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Approval Response

An individual response to an approval.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_approvalresponse` |
| Display name | Approval Response |
| Display (plural) | Approval Responses |
| Schema name | `msdyn_flow_approvalresponse` |
| Entity set (Web API) | `msdyn_flow_approvalresponses` |
| Primary id attribute | `msdyn_flow_approvalresponseid` |
| Primary name attribute | `msdyn_flow_approvalresponse_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flow_approvalresponses?$select=msdyn_flow_approvalresponse_name&$top=10
GET /api/data/v9.2/msdyn_flow_approvalresponses(<guid>)
POST /api/data/v9.2/msdyn_flow_approvalresponses
PATCH /api/data/v9.2/msdyn_flow_approvalresponses(<guid>)
DELETE /api/data/v9.2/msdyn_flow_approvalresponses(<guid>)
```

## Attributes

Writable: **21** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_flow_approvalresponse_additionalfields`, `msdyn_flow_approvalresponse_approval`, `msdyn_flow_approvalresponse_approvalstagekey`, `msdyn_flow_approvalresponse_comments`, `msdyn_flow_approvalresponse_name`, `msdyn_flow_approvalresponse_response`, `msdyn_flow_approvalresponse_stage`, `msdyn_flow_approvalresponse_stepnumber`, `msdyn_flow_approvalresponseId`, `msdyn_flow_approvalresponseidx_approvalid`, `msdyn_flow_approvalresponseidx_owninguserid`, `msdyn_flow_approvalresponseidx_stage`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `StageNumber`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_flow_approvalresponse` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_flow_approvalresponse_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_approvalresponse_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_approvalresponse_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_approvalresponse_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_flow_approvalrelationship_approvalresponses` | [msdyn_flow_approval](msdyn_flow_approval.md) | `msdyn_flow_approvalresponse_approval` | `msdyn_flow_approvalresponse_approval` |
| `owner_msdyn_flow_approvalresponse` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_flow_approvalresponse` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_flow_approvalresponse` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_approvalresponse_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approvalresponse_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approvalresponse_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_flow_approvalresponse_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_flow_approvalresponse_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approvalresponse_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_flow_approvalresponse_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approvalresponse_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_flow_approvalresponse.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_flow_approvalresponse.md) on 2026-05-06.