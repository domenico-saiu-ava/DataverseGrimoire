---
logical: "msdyn_ocliveworkitemcontextitemelastic"
display: "Context Item Elastic"
entitySetName: "msdyn_ocliveworkitemcontextitemelastics"
primaryId: "msdyn_ocliveworkitemcontextitemelasticid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
---

# Context Item Elastic

Context Item Table in Elastic.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkitemcontextitemelastic` |
| Display name | Context Item Elastic |
| Display (plural) | Context Item Elastics |
| Schema name | `msdyn_ocliveworkitemcontextitemelastic` |
| Entity set (Web API) | `msdyn_ocliveworkitemcontextitemelastics` |
| Primary id attribute | `msdyn_ocliveworkitemcontextitemelasticid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkitemcontextitemelastics?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocliveworkitemcontextitemelastics(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkitemcontextitemelastics
PATCH /api/data/v9.2/msdyn_ocliveworkitemcontextitemelastics(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkitemcontextitemelastics(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_datatype`, `msdyn_isdisplayable`, `msdyn_name`, `msdyn_ocliveworkitemcontextitemelasticId`, `msdyn_ocliveworkitemid`, `msdyn_ocliveworkstreamcontextvariableid`, `msdyn_value`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `TimeZoneRuleVersionNumber`, `TTLInSeconds`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocliveworkitemcontextitemelastic` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocliveworkitemcontextitemelastic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocliveworkitemcontextitemelastic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocliveworkitemcontextitemelastic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocliveworkitemcontextitemelastic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_ocliveworkitemcontextitemelastic_msdyn_ocliveworkitemid_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_ocliveworkitemcontextitemelastic_msdyn_ocliveworkstreamcontextvariableid_msdyn_ocliveworkstreamcontextvariable` | [msdyn_ocliveworkstreamcontextvariable](msdyn_ocliveworkstreamcontextvariable.md) | `msdyn_ocliveworkstreamcontextvariableid` | `msdyn_ocliveworkstreamcontextvariableid` |
| `owner_msdyn_ocliveworkitemcontextitemelastic` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocliveworkitemcontextitemelastic` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocliveworkitemcontextitemelastic` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |



## Source

Generated from [msdyn_ocliveworkitemcontextitemelastic.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocliveworkitemcontextitemelastic.md) on 2026-05-06.