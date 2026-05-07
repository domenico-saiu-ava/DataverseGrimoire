---
logical: "msdyn_flow_approvalrequest"
display: "Approval Request"
entitySetName: "msdyn_flow_approvalrequests"
primaryId: "msdyn_flow_approvalrequestid"
primaryName: "msdyn_flow_approvalrequest_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Approval Request

An individual request for approval.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_approvalrequest` |
| Display name | Approval Request |
| Display (plural) | Approval Requests |
| Schema name | `msdyn_flow_approvalrequest` |
| Entity set (Web API) | `msdyn_flow_approvalrequests` |
| Primary id attribute | `msdyn_flow_approvalrequestid` |
| Primary name attribute | `msdyn_flow_approvalrequest_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flow_approvalrequests?$select=msdyn_flow_approvalrequest_name&$top=10
GET /api/data/v9.2/msdyn_flow_approvalrequests(<guid>)
POST /api/data/v9.2/msdyn_flow_approvalrequests
PATCH /api/data/v9.2/msdyn_flow_approvalrequests(<guid>)
DELETE /api/data/v9.2/msdyn_flow_approvalrequests(<guid>)
```

## Attributes

Writable: **29** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_flow_approvalrequest_allowreassignment`, `msdyn_flow_approvalrequest_approval`, `msdyn_flow_approvalrequest_approvalstagekey`, `msdyn_flow_approvalrequest_dueon`, `msdyn_flow_approvalrequest_expireson`, `msdyn_flow_approvalrequest_lastnotifiedon`, `msdyn_flow_approvalrequest_name`, `msdyn_flow_approvalrequest_notificationfrequency`, `msdyn_flow_approvalrequest_options`, `msdyn_flow_approvalrequest_partnermetadata`, `msdyn_flow_approvalrequest_reassignedfrom`, `msdyn_flow_approvalrequest_responseoptions`, `msdyn_flow_approvalrequest_responseoptionstype`, `msdyn_flow_approvalrequest_stage`, `msdyn_flow_approvalrequest_stepnumber`, `msdyn_flow_approvalrequestId`, `msdyn_flow_approvalrequestidx_approvalid`, `msdyn_flow_approvalrequestidx_owninguserid`, `msdyn_flow_approvalrequestidx_reassignedfromid`, `msdyn_flow_approvalrequestidx_stage`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `StageNumber`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_flow_approvalrequest` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_flow_approvalrequest_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_approvalrequest_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_approvalrequest_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_approvalrequest_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_flow_approvalrelationship_approvalrequests` | [msdyn_flow_approval](msdyn_flow_approval.md) | `msdyn_flow_approvalrequest_approval` | `msdyn_flow_approvalrequest_approval` |
| `msdyn_flow_approvalrequestrelationship_reassignment` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `msdyn_flow_approvalrequest_reassignedfrom` | `msdyn_flow_approvalrequest_reassignedfrom` |
| `owner_msdyn_flow_approvalrequest` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_flow_approvalrequest` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_flow_approvalrequest` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_approvalrequest_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approvalrequest_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approvalrequest_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_flow_approvalrequest_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_flow_approvalrequest_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approvalrequest_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_flow_approvalrequest_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approvalrequest_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approvalrequestrelationship_reassignment` | _n/a_ | `msdyn_flow_approvalrequest_reassignedfrom` | _n/a_ |


## Source

Generated from [msdyn_flow_approvalrequest.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_flow_approvalrequest.md) on 2026-05-06.